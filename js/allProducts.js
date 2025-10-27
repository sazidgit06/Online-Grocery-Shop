// // Product data
// let products = [
//     {
//         "id" : 1,
//         "name" : "Whole Wheat Sandwich Bread",
//         "category" : "Fruits & Veges",
//         "image" : "/images/product-thumb-1.png",
//         "price" : 15,
//         "rating" : 4.5,
//         "Filter" : "Best selling product",
//         "bestSelling": true,
//         "offer": "bestPrice"
//     },
//     {
//         "id" : 2,
//         "name" : "Whole Grain Oatmeal",
//         "category" : "Dairy and Eggs",
//         "image" : "/images/product-thumb-2.png",
//         "price" : 16,
//         "rating" : 4.5,
//         "Filter" : "Featured products",
//         "bestSelling": true,
//         "offer": "bestPrice"
//     },
//     {
//         "id" : 3,
//         "name" : "Sharp Cheddar Cheese Block",
//         "category" : "Meat and Poultry",
//         "image" : "/images/product-thumb-3.png",
//         "price" : 17,
//         "rating" : 4.5,
//         "Filter" : "Just Arrived"
//     },
//     {
//         "id" : 4,
//         "name" : "Organic Baby Spinach",
//         "category" : "Seafood",
//         "image" : "/images/product-thumb-4.png",
//         "price" : 18,
//         "rating" : 4.5,
//         "Filter" : "Featured products"
//     },
//     {
//         "id" : 5,
//         "name" : "Organic Spinach Leaves (Fresh Produce)",
//         "category" : "Bakery and Bread",
//         "image" : "/images/product-thumb-5.png",
//         "price" : 12,
//         "rating" : 4.5,
//         "Filter" : "Best selling product"
//     },
//     {
//         "id" : 6,
//         "name" : "Fresh Salmon",
//         "category" : "Fruits & Veges",
//         "image" : "/images/product-thumb-6.png",
//         "price" : 14,
//         "rating" : 4.5,
//         "Filter" : "Featured products"
//     },
//     {
//         "id" : 7,
//         "name" : "Imported Italian Spaghetti Pasta",
//         "category" : "Dairy and Eggs",
//         "image" : "/images/product-thumb-7.png",
//         "price" : 12,
//         "rating" : 4.5,
//         "Filter" : "Just Arrived"
//     },
//     {
//         "id" : 8,
//         "name" : "Granny Smith Apples",
//         "category" : "Meat and Poultry",
//         "image" : "/images/product-thumb-8.png",
//         "price" : 13,
//         "rating" : 4.5,
//         "Filter" : "Best selling product"
//     },
//     {
//         "id" : 9,
//         "name" : "Organic 2% Reduced Fat Milk",
//         "category" : "Seafood",
//         "image" : "/images/product-thumb-9.png",
//         "price" : 11,
//         "rating" : 4.5,
//         "Filter" : "Best selling product"
//     },
//     {
//         "id" : 10,
//         "name" : "Greek Style Plain Yogurt",
//         "category" : "Bakery and Bread",
//         "image" : "/images/product-thumb-10.png",
//         "price" : 21,
//         "rating" : 4.5,
//         "Filter" : "Best selling product"
//     }
// ];

// Initialize filters
let currentSort = 'all';
let minPrice = 0;
let maxPrice = 100000;
let currentOffer = null;

let products = [];


// Get DOM elements
const productGrid = document.querySelector('.all-products-grid');
const sortRadios = document.querySelectorAll('input[name="sort"]');
const offerRadios = document.querySelectorAll('input[name="offer"]');
const minPriceSlider = document.getElementById('minPrice');
const maxPriceSlider = document.getElementById('maxPrice');
const minValueDisplay = document.getElementById('minValue');
const maxValueDisplay = document.getElementById('maxValue');

// Display products
function displayProducts(productsToShow) {
  productGrid.innerHTML = '';
  
  if (productsToShow.length === 0) {
    productGrid.innerHTML = '<div class="col-12"><p class="text-center">No products found matching your filters.</p></div>';
    return;
  }
  
  productsToShow.forEach(product => {
    const productCard = `
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
                      <a href="#" class="btn btn-primary rounded-1 p-2 fs-7 btn-cart productCart">
                      <svg width="18"
                            height="18">
                            <use xlink:href="#cart"></use>
                      </svg>
                      Add to Cart</a>
                      </div>
                      <div class="col-2"><a href="#" class="btn btn-outline-dark rounded-1 p-2 fs-6 wishlistCart"><svg width="18"
                            height="18">
                            <use xlink:href="#heart"></use>
                          </svg></a></div>
                    </div>
                  </div>
                </div>
                </div>
    `;
    productGrid.innerHTML += productCard;
  });
}

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
  switch(currentSort) {
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
  
  minValueDisplay.textContent = `৳${minPrice}`;
  filterAndSortProducts();
});

maxPriceSlider.addEventListener('input', (e) => {
  maxPrice = parseInt(e.target.value);
  
  // Ensure max doesn't go below min
  if (maxPrice < minPrice) {
    maxPrice = minPrice;
    maxPriceSlider.value = minPrice;
  }
  
  maxValueDisplay.textContent = `৳${maxPrice}`;
  filterAndSortProducts();
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
