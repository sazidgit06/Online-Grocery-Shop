// const cartIcon = document.querySelector(".cart-icon");
const cartTab = document.querySelector(".cart-tab");
const closeBtn = document.querySelector(".close-btn");
const cardList = document.querySelector(".product-grid");
const cartList = document.querySelector(".cart-list");
const wishList = document.querySelector(".wish-list");
const cartTotal = document.querySelector(".cart-total");
const wishlistIcon = document.querySelector(".wishlist");
const wishlistBtn = document.querySelector(".wishlistCart")
const wishlistclosebtn = document.querySelector(".close-btn");
const wishlistTab = document.querySelector(".cart-tab");
const cartTitle = document.querySelector(".cart-title");
const wishlistTitle = document.querySelector(".wishlist-title");
const bannerSection = document.querySelector('.banner');



let productList = [];
let cartProduct = [];
let wishlistProduct = [];
let bannerData = [];

let cartCount = 0;


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

// banner data showing here

const showBannerData = () => {
  console.log(bannerData)

  const bannerHTml = `
    <div class="row">
        <div class="col-lg-6 pt-5 mt-5">
          <h2 class="display-1 ls-1"><span class="fw-bold text-primary">${bannerData[0].title1}</span> ${bannerData[0].title2} <span
              class="fw-bold">${bannerData[0].title3}</span></h2>
          <p class="fs-4">${bannerData[0].description}</p>
          <div class="d-flex gap-3">
            <a href="#shop" class="btn btn-primary text-uppercase fs-6 rounded-pill px-4 py-3 mt-3">${bannerData[0].button1}</a>
            <a href="#" class="btn btn-dark text-uppercase fs-6 rounded-pill px-4 py-3 mt-3">${bannerData[0].button2}</a>
          </div>
          <div class="row my-5">
            <div class="col">
              <div class="row text-dark">
                <div class="col-auto">
                  <p class="fs-1 fw-bold lh-sm mb-0">${bannerData[0].varitiesNumber}</p>
                </div>
                <div class="col">
                  <p class="text-uppercase lh-sm mb-0">Product Varieties</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row text-dark">
                <div class="col-auto">
                  <p class="fs-1 fw-bold lh-sm mb-0">${bannerData[0].CustomersNumber}</p>
                </div>
                <div class="col">
                  <p class="text-uppercase lh-sm mb-0">Happy Customers</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row text-dark">
                <div class="col-auto">
                  <p class="fs-1 fw-bold lh-sm mb-0">${bannerData[0].storeLocations}</p>
                </div>
                <div class="col">
                  <p class="text-uppercase lh-sm mb-0">Store <br/> Locations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-sm-3 row-cols-lg-3 g-0 justify-content-center">
        <div class="col">
          <div class="card border-0 bg-primary rounded-0 p-4 text-light">
            <div class="row">
              <div class="col-md-3 text-center">
                ${bannerData[0].icon1}
              </div>
              <div class="col-md-9">
                <div class="card-body p-0">
                  <h5 class="text-light">${bannerData[0].subtitle1}</h5>
                  <p class="card-text">${bannerData[0].smallDescription1}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card border-0 bg-secondary rounded-0 p-4 text-light">
            <div class="row">
              <div class="col-md-3 text-center">
                ${bannerData[0].icon2}
              </div>
              <div class="col-md-9">
                <div class="card-body p-0">
                  <h5 class="text-light">${bannerData[0].subtitle2}</h5>
                  <p class="card-text">${bannerData[0].smallDescription2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card border-0 bg-danger rounded-0 p-4 text-light">
            <div class="row">
              <div class="col-md-3 text-center">
                ${bannerData[0].icon3}
              </div>
              <div class="col-md-9">
                <div class="card-body p-0">
                  <h5 class="text-light">${bannerData[0].subtitle3}</h5>
                  <p class="card-text">${bannerData[0].smallDescription3}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  `;

  bannerSection.insertAdjacentHTML("beforeend", bannerHTml);


}

const showCards = () => {
  console.log(productList)
  productList.forEach(product => {
    const orderCard = document.createElement('div');
    orderCard.classList.add('col')

    orderCard.innerHTML = `
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

    cardList.appendChild(orderCard);

    const cartBtn = orderCard.querySelector('.productCart');
    const wishlistbtn = orderCard.querySelector('.wishlistCart');

    cartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      // document.querySelector(".total-cart").textContent = cartProduct.length + 1;
      addToCart(product);

    })

    wishlistbtn.addEventListener('click', (e) => {
      e.preventDefault();
      // document.querySelector(".total-wishlist").textContent = cartProduct.length + 1;
      addToWishList(product);
    })

  })
}

// const toast = () => {
//   const toastClass = document.querySelector(".toast");
//   const toastHtml = `
//       <div class="d-flex">
//         <div class="toast-body">
//           Hello, world! This is a toast message.
//         </div>
//         <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
//       </div>
//     `;
//   toastClass.insertAdjacentHTML("beforeend", toastHtml)

// }

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


const initApp = () => {

  fetch('public/product.json')
    .then(res => res.json())
    .then(data => {
      productList = data;
      showCards();
    })
}



const banner = () => {
  fetch('public/banner.json')
    .then(res => res.json())
    .then(data => {
      bannerData = data;
      showBannerData();
    })
}

initApp();
banner();