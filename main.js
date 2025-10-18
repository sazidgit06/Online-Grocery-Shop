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
const tabList = document.querySelector(".tab-list");
const bannerSection = document.querySelector('.banner');

// cartIcon.addEventListener('click', (e) => {

//   cartTab.classList.add('cart-tab-active');
//   cartTitle.style.display = "block";
//   wishlistTitle.style.display = "none";

//   cartList.style.display = "block";
//   wishList.style.display = "none";

//   e.preventDefault();

// })
// closeBtn.addEventListener('click', (e) => {

//   cartTab.classList.remove('cart-tab-active')
//   e.preventDefault();

// })

// wishlistIcon.addEventListener('click', (e) => {

//   wishlistTab.classList.add('cart-tab-active');
//   cartTitle.style.display = "none";
//   wishlistTitle.style.display = "block";

//   cartList.style.display = "none";
//   wishList.style.display = "block";

//   e.preventDefault();

// })
// wishlistclosebtn.addEventListener('click', (e) => {

//   wishlistTab.classList.remove('cart-tab-active')
//   e.preventDefault();

// })


let productList = [];
let cartProduct = [];
// let wishlistProduct = [];
let wishlistProduct = [];
let navbarTabProduct = [];
let bannerData = [];

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

const showTab = () => {
  console.log(navbarTabProduct)
  navbarTabProduct.forEach(tabProduct => {

    const tablisthtml = `
    
      <li class="nav-item border-dashed active">
          <a href="${tabProduct.href}" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
            ${tabProduct.icon}
            <span>${tabProduct.name}</span>
          </a>
        </li>

    `;

    tabList.insertAdjacentHTML("beforeend", tablisthtml);

  })
}



const showCards = () => {
  console.log(productList)
  productList.forEach(product => {
    const orderCard = document.createElement('div');
    orderCard.classList.add('col')

    orderCard.innerHTML = `
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
      console.log(product)
      addToCart(product);
    })

    wishlistbtn.addEventListener('click', (e) => {
      e.preventDefault();
      addToWishList(product);
    })

  })
}

// add to cart

const addToCart = (product) => {
  
  let totalItem = 0;

  console.log(product)
  const exist = cartProduct.find(item => item.id === product.id);
  console.log(exist)
  if(exist){
    alert("Item already added");
    return;
  }

  alert('Product is added to cart');

  cartProduct.push(product);
  console.log(cartProduct)

  // let quantity = 1;
  let price = parseFloat(product.price.replace('$','')) 

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


// add to wishlist

// const addToWishList = (product) => {

//   const exist = wishlistProduct.find(item => item.id === product.id);
//   if(exist){
//     alert("Item already in wishlist");
//     return;
//   }

//   alert('Product is added to wishlist');

//   wishlistProduct.push(product);

//   let quantity = 1;
//   let price = parseFloat(product.price.replace('$',''));

//   const cartItem = document.createElement('div');
//   cartItem.classList.add('item');
//   cartItem.classList.add('wishlistTotal');
//   cartItem.innerHTML = `
//     <div class="item-image">
//           <img src="${product.image}" alt="">
//         </div>
//         <div>
//           <h4>${product.name}</h4>
//           <h4 class="item-total">${product.price}</h4>
//         </div>
//         <div class="flex">
//           <a href="#" class="quantity-btn">
//             <i class="fa-solid fa-minus minus"></i>
//           </a>

//           <h3 class="quantity-value">${quantity}</h3>

//           <a href="#" class="quantity-btn">
//             <i class="fa-solid fa-plus plus"></i>
//           </a>
//         </div>
//       `;

//   wishList.appendChild(cartItem);

//   const plusBtn = cartItem.querySelector('.plus');
//   const quantityValue = cartItem.querySelector('.quantity-value');
//   const itemTotal = cartItem.querySelector('.item-total');
//   const minusBtn = cartItem.querySelector('.minus');


//   plusBtn.addEventListener('click', (e) => {

//     e.preventDefault();
//     quantity++;
//     quantityValue.textContent = quantity;
//     itemTotal.textContent = `$${ price * quantity }`;
//   })

//   minusBtn.addEventListener('click', (e) => {

//     e.preventDefault();
//     if(quantity > 1){
//       quantity--;
//       quantityValue.textContent = quantity;
//       itemTotal.textContent = `$${ (price * quantity) }`;
//     }else{
//       cartItem.classList.add('slide-out');
      
//       setTimeout(()=>{
//         cartItem.remove();
//       cartProduct = cartProduct.filter(item => item.id !== product.id);
//       }, 300)
//     }
    
    
//   })

// }

const initApp = () => {

  fetch('public/product.json')
    .then(res => res.json())
    .then(data => {
      productList = data;
      showCards();
    })
}

const navbarLeftTab = () => {

  fetch('public/navbarLeftTab.json')
    .then(res => res.json())
    .then(data => {
      navbarTabProduct = data;
      showTab();
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
navbarLeftTab();
banner();