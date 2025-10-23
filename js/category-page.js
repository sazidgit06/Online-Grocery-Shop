const productContainer = document.getElementById("product-container");
const categoryTitle = document.getElementById("category-title");
// const cartIcon = document.querySelector(".cart-icon");
const cartTab = document.querySelector(".cart-tab");
const closeBtn = document.querySelector(".close-btn");
const cardList = document.querySelector(".product-grid");
const cartList = document.querySelector(".cart-list");
const wishList = document.querySelector(".wish-list");
const cartTotal = document.querySelector(".cart-total");
const wishlistIcon = document.querySelector(".wishlist");
const wishlistBtn = document.querySelector(".wishlistCartBtn")
const wishlistclosebtn = document.querySelector(".close-btn");
const wishlistTab = document.querySelector(".cart-tab");
const cartTitle = document.querySelector(".cart-title");
const wishlistTitle = document.querySelector(".wishlist-title");

const params = new URLSearchParams(window.location.search);
const categoryName = params.get("category");

let filteredProducts = [];
let productList = [];
let cartProduct = [];
let wishlistProduct = [];

const updateTotals = () => {
  let totalPrice = 0;

  const cartItems = document.querySelectorAll(".cart-list li");

  cartItems.forEach(item => {
    const priceText = item.querySelector("span.text-body-secondary").textContent;
    const price = parseFloat(priceText.replace("$", ""));
    totalPrice += price;
  });

  cartTotal.textContent = `$${totalPrice.toFixed(2)}`;

  // console.log("Total price:", totalPrice);
};

const wishlistUpdateTotals = () => {
  let totalPrice = 0;

  const wishlistItems = document.querySelectorAll(".wish-list li");

  wishlistItems.forEach(item => {
    const priceText = item.querySelector("span.text-body-secondary").textContent;
    const price = parseFloat(priceText.replace("$", ""));
    totalPrice += price;
  });

  const wishlistTotal = document.querySelector(".wishlist-total");
  if (wishlistTotal) {
    wishlistTotal.textContent = `$${totalPrice.toFixed(2)}`;
  }

};

if (categoryName) {
    // Decode the category name properly
    const decodedCategory = decodeURIComponent(categoryName);
    categoryTitle.textContent = decodedCategory;

    fetch('public/product.json')
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to fetch products');
            }
            return res.json();
        })
        .then(data => {
            console.log('All products:', data);
            console.log('Looking for category:', decodedCategory);
            console.log('Available categories:', [...new Set(data.map(p => p.category))]);

            filteredProducts = data.filter(product => {
                const match = product.category &&
                    product.category.trim().toLowerCase() === decodedCategory.trim().toLowerCase();
                console.log(`Comparing "${product.category}" with "${decodedCategory}": ${match}`);
                return match;
            });

            console.log('Filtered products:', filteredProducts);
            console.log('Number of products found:', filteredProducts.length);

            if (filteredProducts.length === 0) {
                productContainer.innerHTML = `
                    <div class="col-12">
                        <div class="alert alert-info text-center">
                            <h4>No products found in "${decodedCategory}" category</h4>
                            <p>Available categories in database:</p>
                            <ul class="list-unstyled">
                                ${[...new Set(data.map(p => p.category))].map(cat =>
                    `<li><strong>${cat}</strong></li>`
                ).join('')}
                            </ul>
                            <a href="index.html" class="btn btn-primary mt-3">Go to Homepage</a>
                        </div>
                    </div>
                `;
                return;
            }

            filteredProducts.forEach(product => {
                const productHTML = `
                
                     <div class='product-item'>
            <figure>
                  <a href="index.html" title="Product Title">
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
                    <span class="text-dark fw-semibold">${product.price}</span>
                    <span
                      class="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10%
                      OFF</span>
                  </div>
                  <div class="button-area p-3 pt-0">
                    <div class="row g-1 mt-2">
                      <div class="col-3"><input type="number" name="quantity"
                          class="form-control border-dark-subtle input-number quantity" value="1"></div>
                      <div class="col-7">
                      <a href="#" class="btn btn-primary rounded-1 p-2 fs-7 btn-cart productCartBtn">
                      <svg width="18"
                            height="18">
                            <use xlink:href="#cart"></use>
                      </svg>
                      Add to Cart</a>
                      </div>
                      <div class="col-2"><a href="#" class="btn btn-outline-dark rounded-1 p-2 fs-6 wishlistCartBtn"><svg width="18"
                            height="18">
                            <use xlink:href="#heart"></use>
                          </svg></a></div>
                    </div>
                  </div>
                </div>
                </div>
                `;
                productContainer.insertAdjacentHTML("beforeend", productHTML);

                const cartBtn = document.querySelector('.productCartBtn');
                const wishlistbtn = document.querySelector('.wishlistCartBtn');

                cartBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    console.log(product)
                    addToCart(product);
                })

                wishlistbtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    addToWishList(product);
                })
            });
        })
        .catch(error => {
            console.error('Error loading products:', error);
            productContainer.innerHTML = `
                <div class="col-12">
                    <div class="alert alert-danger text-center">
                        <h4>Error loading products</h4>
                        <p>${error.message}</p>
                        <p class="text-muted">Make sure public/product.json exists and is accessible</p>
                        <a href="index.html" class="btn btn-primary mt-3">Go to Homepage</a>
                    </div>
                </div>
            `;
        });
} else {
    categoryTitle.textContent = "Category not found!";
    productContainer.innerHTML = `
        <div class="col-12">
            <div class="alert alert-warning text-center">
                <h4>No category specified</h4>
                <a href="index.html" class="btn btn-primary mt-3">Go to Homepage</a>
            </div>
        </div>
    `;
}


// add to cart

const addToCart = (product) => {

    let totalItem = 0;

    console.log(product)
    const exist = cartProduct.find(item => item.id === product.id);
    console.log(exist)
    if (exist) {
        alert("Item already added");
        return;
    }

    alert('Product is added to cart');

    cartProduct.push(product);
    console.log(cartProduct)

    // let quantity = 1;
    let price = parseFloat(product.price.replace('$', ''))

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

    // cartList.insertAdjacentElement("beforebegin", cartProduct);
    cartList.insertAdjacentHTML("beforeend", cartProducthtml);


    updateTotals();

    const deleteBtn = cartList.querySelector("li:last-child .delete-btn");

    deleteBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const li = e.target.closest("li");
        li.classList.add("slide-out");

        setTimeout(() => {
            li.remove();
            cartProduct = cartProduct.filter(item => item.id !== product.id);
            updateTotals();
        }, 300);
    })



    // const plusBtn = cartItem.querySelector('.plus');
    // const quantityValue = cartItem.querySelector('.quantity-value');
    // const itemTotal = cartItem.querySelector('.cart-total');
    // const minusBtn = cartItem.querySelector('.minus');


    // plusBtn.addEventListener('click', (e) => {

    //   e.preventDefault();
    //   quantity++;
    //   quantityValue.textContent = quantity;
    //   itemTotal.textContent = `$${ price * quantity }`;
    //    updateTotals();
    // })

    // minusBtn.addEventListener('click', (e) => {

    //   e.preventDefault();
    //   if(quantity > 1){
    //     quantity--;
    //     quantityValue.textContent = quantity;
    //     itemTotal.textContent = `$${ (price * quantity) }`;
    //     updateTotals();
    //   }else{
    //     cartItem.classList.add('slide-out');

    //     setTimeout(()=>{
    //       cartItem.remove();
    //     cartProduct = cartProduct.filter(item => item.id !== product.id);
    //     updateTotals();
    //     }, 300)
    //   }


    // })

}

// add to wishlist

// Add to Wishlist


const addToWishList = (product) => {
    const exist = wishlistProduct.find(item => item.id === product.id);
    if (exist) {
        alert("Item already in wishlist");
        return;
    }

    alert('Product is added to wishlist');
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