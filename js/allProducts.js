const cartIcon = document.querySelector(".cart-icon");
const cartTab = document.querySelector(".cart-tab");
const closeBtn = document.querySelector(".close-btn");
const cardList = document.querySelector(".product-grid");
const cartList = document.querySelector(".cart-list");
const cartTotal = document.querySelector(".cart-total");


cartIcon.addEventListener('click', (e) => {

  cartTab.classList.add('cart-tab-active');
  e.preventDefault();

})
closeBtn.addEventListener('click', (e) => {

  cartTab.classList.remove('cart-tab-active')
  e.preventDefault();

})


let productList = [];
let cartProduct = [];

const updateTotals = () => {
  let totalPrice = 0;
  document.querySelectorAll('.item').forEach(item => {
    const price = parseFloat(item.querySelector('.item-total').textContent.replace('$',''))
    totalPrice+=price;
  });
  cartTotal.textContent = `$${totalPrice}`
}

const showCards = () => {
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
                      <a href="#" class="btn btn-primary rounded-1 p-2 fs-7 btn-cart myCart">
                      <svg width="18"
                            height="18">
                            <use xlink:href="#cart"></use>
                      </svg>
                      Add to Cart</a>
                      </div>
                      <div class="col-2"><a href="#" class="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width="18"
                            height="18">
                            <use xlink:href="#heart"></use>
                          </svg></a></div>
                    </div>
                  </div>
                </div>
                </div>
        `;

    cardList.appendChild(orderCard);

    const cartBtn = orderCard.querySelector('.myCart');

    cartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      addToCart(product);
    })

  })
}

const addToCart = (product) => {

  const exist = cartProduct.find(item => item.id === product.id);
  if(exist){
    alert("Item already added");
    return;
  }

  alert('Product is added to cart');

  cartProduct.push(product);

  let quantity = 1;
  let price = parseFloat(product.price.replace('$',''))

  const cartItem = document.createElement('div');
  cartItem.classList.add('item');
  cartItem.innerHTML = `
    <div class="item-image">
          <img src="${product.image}" alt="">
        </div>
        <div>
          <h4>${product.name}</h4>
          <h4 class="item-total">${product.price}</h4>
        </div>
        <div class="flex">
          <a href="#" class="quantity-btn">
            <i class="fa-solid fa-minus minus"></i>
          </a>

          <h4 class="quantity-value">${quantity}</h4>

          <a href="#" class="quantity-btn">
            <i class="fa-solid fa-plus plus"></i>
          </a>
        </div>
      `;

  cartList.appendChild(cartItem);
  updateTotals();

  const plusBtn = cartItem.querySelector('.plus');
  const quantityValue = cartItem.querySelector('.quantity-value');
  const itemTotal = cartItem.querySelector('.item-total');
  const minusBtn = cartItem.querySelector('.minus');


  plusBtn.addEventListener('click', (e) => {

    e.preventDefault();
    quantity++;
    quantityValue.textContent = quantity;
    itemTotal.textContent = `$${ price * quantity }`;
     updateTotals();
  })

  minusBtn.addEventListener('click', (e) => {

    e.preventDefault();
    if(quantity > 1){
      quantity--;
      quantityValue.textContent = quantity;
      itemTotal.textContent = `$${ (price * quantity) }`;
      updateTotals();
    }else{
      cartItem.classList.add('slide-out');
      
      setTimeout(()=>{
        cartItem.remove();
      cartProduct = cartProduct.filter(item => item.id !== product.id);
      updateTotals();
      }, 300)
    }
    
    
  })

}

const initApp = () => {

  fetch('product.json')
    .then(res => res.json())
    .then(data => {
      productList = data;
      showCards();
    })
}

initApp();