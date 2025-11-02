

// Initialize filters
let currentSort = 'all';
let minPrice = 0;
let maxPrice = 100000;
let currentOffer = null;

let products = [];
let cartProduct = [];
let wishlistProduct = [];


// Get DOM elements
const productGrid = document.querySelector('.all-products-grid');
const sortRadios = document.querySelectorAll('input[name="sort"]');
const offerRadios = document.querySelectorAll('input[name="offer"]');
const minPriceSlider = document.getElementById('minPrice');
const maxPriceSlider = document.getElementById('maxPrice');
const minValueDisplay = document.getElementById('minValue');
const maxValueDisplay = document.getElementById('maxValue');
const cartList = document.querySelector(".cart-list");
const cartTotal = document.querySelector(".cart-total");
const wishList = document.querySelector(".wish-list");


const updateTotals = () => {
  let totalPrice = 0;
  let totalQuantity = 0;

  const cartItems = document.querySelectorAll(".cart-list li");

  cartItems.forEach(item => {
    const priceText = item.querySelector("span.text-body-secondary").textContent;
    const price = parseFloat(priceText.replace("$", ""));
    totalPrice += price;
    totalQuantity++;
  });

  cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
  const quantity = document.querySelector(".total-cart");
  quantity.textContent = totalQuantity;

  // console.log("Total price:", totalPrice);
};

const wishlistUpdateTotals = () => {
  let totalPrice = 0;
  let totalQuantity = 0;


  const wishlistItems = document.querySelectorAll(".wish-list li");

  wishlistItems.forEach(item => {
    const priceText = item.querySelector("span.text-body-secondary").textContent;
    const price = parseFloat(priceText.replace("$", ""));
    totalPrice += price;
    totalQuantity++;
  });

  const wishlistTotal = document.querySelector(".wishlist-total");
  if (wishlistTotal) {
    wishlistTotal.textContent = `$${totalPrice.toFixed(2)}`;
    const quantity = document.querySelector(".total-wishlist");
    quantity.textContent = totalQuantity;
  }

};


// Display products
function displayProducts(productsToShow) {
  productGrid.innerHTML = '';

  if (productsToShow.length === 0) {
    productGrid.innerHTML = '<div class="col-12"><p class="text-center">No products found matching your filters.</p></div>';
    return;
  }

  productsToShow.forEach(product => {
    const productCardhtml = `
      <div class='product-item'>
            <figure>
                  <a href="singleProduct.html?id=${product.id}" title="Product Title">
                    <img src="${product.image}" alt="Product Thumbnail" class="tab-image">
                  </a>
                </figure>
                <div class="d-flex flex-column text-center">
                  <h3 class="fs-6 fw-normal">${product.name}</h3>
                  <div>
                    <span class="rating">
                      <svg width="18" height="18" class="text-warning">
                        <use xlink:href="#star-full"></use>
                      </svg>
                      <svg width="18" height="18" class="text-warning">
                        <use xlink:href="#star-full"></use>
                      </svg>
                      <svg width="18" height="18" class="text-warning">
                        <use xlink:href="#star-full"></use>
                      </svg>
                      <svg width="18" height="18" class="text-warning">
                        <use xlink:href="#star-full"></use>
                      </svg>
                      <svg width="18" height="18" class="text-warning">
                        <use xlink:href="#star-half"></use>
                      </svg>
                    </span>
                    <span>(222)</span>
                  </div>
                  <div class="d-flex justify-content-center align-items-center gap-2">
                    <del>$24.00</del>
                    <span class="text-dark fw-semibold">$${product.price}</span>
                    <span
                      class="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10%
                      OFF</span>
                  </div>
                  <div class="button-area p-3 pt-0">
                    <div class="row g-1 mt-2">
                      <div class="col-3"><input type="number" name="quantity"
                          class="form-control border-dark-subtle input-number quantity" value="1"></div>
                      <div class="col-7">
                      <a href="#" class="btn btn-primary rounded-1 p-2 fs-7 btn-cart allproductCart">
                      <svg width="18"
                            height="18">
                            <use xlink:href="#cart"></use>
                      </svg>
                      Add to Cart</a>
                      </div>
                      <div class="col-2"><a href="#" class="btn btn-outline-dark rounded-1 p-2 fs-6 allwishlistCart"><svg width="18"
                            height="18">
                            <use xlink:href="#heart"></use>
                          </svg></a></div>
                    </div>
                  </div>
                </div>
                </div>
    `;
    productGrid.insertAdjacentHTML("beforeend", productCardhtml);
      const productElement = productGrid.lastElementChild;


    const cartBtn = productElement.querySelector('.allproductCart');
    const wishlistbtn = productElement.querySelector('.allwishlistCart');

    cartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      addToCart(product);

    })

    wishlistbtn.addEventListener('click', (e) => {
      e.preventDefault();
      addToWishList(product);
    })
  });
}

const addToCart = (product) => {


  let totalItem = 0;

  console.log(product)
  const exist = cartProduct.find(item => item.id === product.id);
  console.log(exist)
  if (exist) {
    alert("Item already added");
    return;
  }

// alert("product is added to cart")


  cartProduct.push(product);
  console.log(cartProduct)

  // let quantity = 1;
  // let price = parseFloat(product.price.replace('$','')) 

  const cartProducthtml = `

          <li class="list-group-item d-flex justify-content-between lh-sm">
          
              <img src="${product.image}" />
            
            <div>
              <h6 class="my-0">${product.name}</h6>
              <small class="text-body-secondary">${product.category}</small>
            </div>
            <span class="text-body-secondary">${product.price}</span>
            <i class="fa-solid fa-trash delete-btn"></i>
          </li>
      
      `;

  cartList.insertAdjacentHTML("beforeend", cartProducthtml);


  updateTotals();

  const deleteBtn = cartList.querySelector("li:last-child .delete-btn");

  deleteBtn.addEventListener('click', (e) => {

    e.preventDefault();
    document.querySelector(".total-cart").textContent = cartProduct.length + 1;

    const li = e.target.closest("li");
    li.classList.add("slide-out");

    setTimeout(() => {
      li.remove();
      cartProduct = cartProduct.filter(item => item.id !== product.id);
      updateTotals();
    }, 300);
  })

}


const addToWishList = (product) => {
  const exist = wishlistProduct.find(item => item.id === product.id);
  if (exist) {
    alert("Item already in wishlist");
    return;
  }

  // alert('Product is added to wishlist');
  wishlistProduct.push(product);

  const wishlistItemHTML = `
    <li class="list-group-item d-flex justify-content-between lh-sm">
      <img src="${product.image}" />
      <div>
        <h6 class="my-0">${product.name}</h6>
        <small class="text-body-secondary">${product.category}</small>
      </div>
      <span class="text-body-secondary">${product.price}</span>
      <i class="fa-solid fa-trash delete-btn"></i>
    </li>
  `;

  wishList.insertAdjacentHTML("beforeend", wishlistItemHTML);

  wishlistUpdateTotals();

  const deleteBtn = wishList.querySelector("li:last-child .delete-btn");

  deleteBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const li = e.target.closest("li");
    li.classList.add("slide-out");

    setTimeout(() => {
      li.remove();
      const index = wishlistProduct.findIndex(item => item.id === product.id);
      if (index !== -1) wishlistProduct.splice(index, 1);

      wishlistUpdateTotals();
    }, 300);

  });
};


// Filter and sort products
function filterAndSortProducts() {
  let filteredProducts = [...products];

  // Filter by price range
  filteredProducts = filteredProducts.filter(p =>
    p.price >= minPrice && p.price <= maxPrice
  );

  // Filter by offers
  if (currentOffer === 'bestPrice') {
    filteredProducts = filteredProducts.filter(p => p.offer === 'bestPrice');
  } else if (currentOffer === 'discount') {
    // Filter products with discount (if you add discount field later)
    filteredProducts = filteredProducts.filter(p => p.discount && p.discount > 0);
  }

  // Sort products
  switch (currentSort) {
    case 'lowToHigh':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'highToLow':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'bestSelling':
      filteredProducts = filteredProducts.filter(p => p.bestSelling === true);
      break;
    case 'all':
    default:
      // Keep original order
      filteredProducts.sort((a, b) => a.id - b.id);
      break;
  }

  displayProducts(filteredProducts);
}

// Event listeners for sort radio buttons
sortRadios.forEach(radio => {
  radio.addEventListener('change', (e) => {
    currentSort = e.target.value;
    filterAndSortProducts();
  });
});

// Event listeners for offer radio buttons
offerRadios.forEach(radio => {
  radio.addEventListener('change', (e) => {
    currentOffer = e.target.value;
    filterAndSortProducts();
  });
});

// Price range sliders
minPriceSlider.addEventListener('input', (e) => {
  minPrice = parseInt(e.target.value);

  // Ensure min doesn't exceed max
  if (minPrice > maxPrice) {
    minPrice = maxPrice;
    minPriceSlider.value = maxPrice;
  }

  minValueDisplay.textContent = `$${minPrice}`;
  filterAndSortProducts();
});

maxPriceSlider.addEventListener('input', (e) => {
  maxPrice = parseInt(e.target.value);

  // Ensure max doesn't go below min
  if (maxPrice < minPrice) {
    maxPrice = minPrice;
    maxPriceSlider.value = minPrice;
  }

  maxValueDisplay.textContent = `$${maxPrice}`;
  filterAndSortProducts();
});

// filter section toggle

const filterBtn = document.querySelector('.filter-btn');
const filterSection = document.querySelector('.filter-section');
const overlay = document.querySelector('.overlay');

filterBtn.addEventListener('click', () => {
  filterSection.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  filterSection.classList.remove('active');
  overlay.classList.remove('active');
});



const initApp = () => {

  fetch('public/product.json')
    .then(res => res.json())
    .then(data => {
      products = data;
      displayProducts(products)
    })
}

initApp();
