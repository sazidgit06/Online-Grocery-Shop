const carticon = document.querySelector(".cart-icon");
const carttab = document.querySelector(".cart-tab");
const closebtn = document.querySelector(".close-btn");
const wrapper = document.querySelector(".product-wrapper");
const popularWrapper = document.querySelector(".popular-product-wrapper");
const justArrived = document.querySelector(".justArrived-product-wrapper");
const cartlist = document.querySelector(".cart-list");
const carttotal = document.querySelector(".cart-total");
const wishListfeature = document.querySelector(".wish-list");


let featuredproductList = [];
let featuredcartProduct = [];
let featuredwishlistProduct = [];

const featuredupdateTotals = () => {
  let totalPrice = 0;

  const cartItems = document.querySelectorAll(".cart-list li");

  cartItems.forEach(item => {
    const priceText = item.querySelector("span.text-body-secondary").textContent;
    const price = parseFloat(priceText.replace("$", ""));
    totalPrice += price;
  });

  cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
};

const featuredwishlistUpdateTotals = () => {
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

const showcards = () => {
  featuredproductList.forEach(product => {
    const producthtml = document.createElement('div')
    producthtml.classList.add('product-item');
    producthtml.classList.add('swiper-slide');
    producthtml.innerHTML = `
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
                    <span class="text-dark fw-semibold">${product.price}}</span>
                    <span
                      class="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10%
                      OFF</span>
                  </div>
                  <div class="button-area p-3 pt-0">
                    <div class="row g-1 mt-2">
                      <div class="col-3"><input type="number" name="quantity"
                          class="form-control border-dark-subtle input-number quantity" value="1"></div>
                      <div class="col-7"><a href="#" class="btn btn-primary rounded-1 p-2 fs-7 btn-cart mycart"><svg width="18"
                            height="18">
                            <use xlink:href="#cart"></use>
                          </svg> Add to Cart</a></div>
                      <div class="col-2"><a href="#" class="btn btn-outline-dark rounded-1 p-2 fs-6 wishlistCart"><svg width="18"
                            height="18">
                            <use xlink:href="#heart"></use>
                          </svg></a></div>
                    </div>
                  </div>
                </div> 
        `;

    wrapper.appendChild(producthtml);
  

    const cartBtn = producthtml.querySelector('.mycart');
    const wishlistbtn = producthtml.querySelector('.wishlistCart');

    cartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      addtocart(product);
    })
    wishlistbtn.addEventListener('click', (e) => {
      e.preventDefault();
      featuredWishlist(product);
    })

  })
}
// const showjustarrivedcards = () => {
//   featuredproductList.forEach(product => {
//     const producthtml = document.createElement('div')
//     producthtml.classList.add('product-item');
//     producthtml.classList.add('swiper-slide');
//     producthtml.innerHTML = `
//                 <figure>
//                   <a href="singleProduct.html?id=${product.id}" title="Product Title">
//                     <img src="${product.image}" alt="Product Thumbnail" class="tab-image">
//                   </a>
//                 </figure>
//                 <div class="d-flex flex-column text-center">
//                   <h3 class="fs-6 fw-normal">${product.name}</h3>
//                   <div>
//                     <span class="rating">
//                       <svg width="18" height="18" class="text-warning">
//                         <use xlink:href="#star-full"></use>
//                       </svg>
//                       <svg width="18" height="18" class="text-warning">
//                         <use xlink:href="#star-full"></use>
//                       </svg>
//                       <svg width="18" height="18" class="text-warning">
//                         <use xlink:href="#star-full"></use>
//                       </svg>
//                       <svg width="18" height="18" class="text-warning">
//                         <use xlink:href="#star-full"></use>
//                       </svg>
//                       <svg width="18" height="18" class="text-warning">
//                         <use xlink:href="#star-half"></use>
//                       </svg>
//                     </span>
//                     <span>(222)</span>
//                   </div>
//                   <div class="d-flex justify-content-center align-items-center gap-2">
//                     <del>$24.00</del>
//                     <span class="text-dark fw-semibold">${product.price}}</span>
//                     <span
//                       class="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10%
//                       OFF</span>
//                   </div>
//                   <div class="button-area p-3 pt-0">
//                     <div class="row g-1 mt-2">
//                       <div class="col-3"><input type="number" name="quantity"
//                           class="form-control border-dark-subtle input-number quantity" value="1"></div>
//                       <div class="col-7"><a href="#" class="btn btn-primary rounded-1 p-2 fs-7 btn-cart mycart"><svg width="18"
//                             height="18">
//                             <use xlink:href="#cart"></use>
//                           </svg> Add to Cart</a></div>
//                       <div class="col-2"><a href="#" class="btn btn-outline-dark rounded-1 p-2 fs-6 wishlistCart"><svg width="18"
//                             height="18">
//                             <use xlink:href="#heart"></use>
//                           </svg></a></div>
//                     </div>
//                   </div>
//                 </div> 
//         `;

//     justArrived.appendChild(producthtml);
  

//     const cartBtn = producthtml.querySelector('.mycart');
//     const wishlistbtn = producthtml.querySelector('.wishlistCart');

//     cartBtn.addEventListener('click', (e) => {
//       e.preventDefault();
//       addtocart(product);
//     })
//     wishlistbtn.addEventListener('click', (e) => {
//       e.preventDefault();
//       featuredWishlist(product);
//     })

//   })
// }
// const showpopularcards = () => {
//   featuredproductList.forEach(product => {
//     const producthtml = document.createElement('div')
//     producthtml.classList.add('product-item');
//     producthtml.classList.add('swiper-slide');
//     producthtml.innerHTML = `
//                 <figure>
//                   <a href="singleProduct.html?id=${product.id}" title="Product Title">
//                     <img src="${product.image}" alt="Product Thumbnail" class="tab-image">
//                   </a>
//                 </figure>
//                 <div class="d-flex flex-column text-center">
//                   <h3 class="fs-6 fw-normal">${product.name}</h3>
//                   <div>
//                     <span class="rating">
//                       <svg width="18" height="18" class="text-warning">
//                         <use xlink:href="#star-full"></use>
//                       </svg>
//                       <svg width="18" height="18" class="text-warning">
//                         <use xlink:href="#star-full"></use>
//                       </svg>
//                       <svg width="18" height="18" class="text-warning">
//                         <use xlink:href="#star-full"></use>
//                       </svg>
//                       <svg width="18" height="18" class="text-warning">
//                         <use xlink:href="#star-full"></use>
//                       </svg>
//                       <svg width="18" height="18" class="text-warning">
//                         <use xlink:href="#star-half"></use>
//                       </svg>
//                     </span>
//                     <span>(222)</span>
//                   </div>
//                   <div class="d-flex justify-content-center align-items-center gap-2">
//                     <del>$24.00</del>
//                     <span class="text-dark fw-semibold">${product.price}}</span>
//                     <span
//                       class="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10%
//                       OFF</span>
//                   </div>
//                   <div class="button-area p-3 pt-0">
//                     <div class="row g-1 mt-2">
//                       <div class="col-3"><input type="number" name="quantity"
//                           class="form-control border-dark-subtle input-number quantity" value="1"></div>
//                       <div class="col-7"><a href="#" class="btn btn-primary rounded-1 p-2 fs-7 btn-cart mycart"><svg width="18"
//                             height="18">
//                             <use xlink:href="#cart"></use>
//                           </svg> Add to Cart</a></div>
//                       <div class="col-2"><a href="#" class="btn btn-outline-dark rounded-1 p-2 fs-6 wishlistCart"><svg width="18"
//                             height="18">
//                             <use xlink:href="#heart"></use>
//                           </svg></a></div>
//                     </div>
//                   </div>
//                 </div> 
//         `;

//     popularWrapper.appendChild(producthtml);
  

//     const cartBtn = producthtml.querySelector('.mycart');
//     const wishlistbtn = producthtml.querySelector('.wishlistCart');

//     cartBtn.addEventListener('click', (e) => {
//       e.preventDefault();
//       addtocart(product);
//     })
//     wishlistbtn.addEventListener('click', (e) => {
//       e.preventDefault();
//       featuredWishlist(product);
//     })

//   })
// }

const featuredWishlist = (product) => {
  const exist = featuredwishlistProduct.find(item => item.id === product.id);
  if (exist) {
    alert("Item already in wishlist");
    return;
  }

  alert('Product is added to wishlist');
  featuredwishlistProduct.push(product);

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

  wishListfeature.insertAdjacentHTML("beforeend", wishlistItemHTML);

  featuredwishlistUpdateTotals();

  const deleteBtn = wishList.querySelector("li:last-child .delete-btn");

  deleteBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const li = e.target.closest("li");
    li.classList.add("slide-out");

    setTimeout(() => {
      li.remove();
      const index = featuredwishlistProduct.findIndex(item => item.id === product.id);
      if (index !== -1) featuredwishlistProduct.splice(index, 1);

      featuredwishlistUpdateTotals();
    }, 300);

  });
};

const addtocart = (product) => {

  const exist = featuredcartProduct.find(item => item.id === product.id);
  if (exist) {
    alert("Item already added");
    return;
  }

  alert('Product is added to cart');

  featuredcartProduct.push(product);

  let quantity = 1;
  // let price = parseFloat(product.price.replace('$', ''))

  const cartHtml = `
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

  cartlist.insertAdjacentHTML('beforeend', cartHtml)
  featuredupdateTotals();

    const deleteBtn = cartList.querySelector("li:last-child .delete-btn");

  deleteBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const li = e.target.closest("li");
    li.classList.add("slide-out");

  setTimeout(() => {
    li.remove();
    featuredcartProduct = featuredcartProduct.filter(item => item.id !== product.id);
    featuredupdateTotals();
  }, 300);
  })

}

const initapp = () => {

  fetch('public/product.json')
    .then(res => res.json())
    .then(data => {
      featuredproductList = data;
      showcards();
      // showpopularcards();
      // showjustarrivedcards();
    })
}

initapp();
