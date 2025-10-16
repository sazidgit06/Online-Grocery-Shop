const wishlistIcon = document.querySelector(".wishlist");
const wishlistTab = document.querySelector(".cart-tab");
const wishlistclosebtn = document.querySelector(".close-btn");
// const wishlistcard = document.querySelector(".product-grid");
const wishlist = document.querySelector(".cart-list");
const wishlistTotal = document.querySelector(".cart-total");
const wishlistBtn = document.querySelector(".wishlistCart")

wishlistIcon.addEventListener('click', (e) => {

  wishlistTab.classList.add('cart-tab-active');
  e.preventDefault();

})
wishlistclosebtn.addEventListener('click', (e) => {

  wishlistTab.classList.remove('cart-tab-active')
  e.preventDefault();

})


let wishlistproduct = [];
let wishlistcartproduct = [];

const wishlistUpdateTotals = () => {
  let totalPrice = 0;
  document.querySelectorAll('.item').forEach(item => {
    const price = parseFloat(item.querySelector('.item-total').textContent.replace('$',''))
    totalPrice+=price;
  });
  wishlistTotal.textContent = `$${totalPrice}`
}

const wishlistShowcards = () => {
  wishlistproduct.forEach(product => {
   

    wishlistcard.appendChild(orderCard);

    const cartBtn = orderCard.querySelector('.wishlistIcon');

    cartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      wishlistAddToCart(product);
    })

  })
}

const wishlistAddToCart = (product) => {

  const exist = wishlistcartproduct.find(item => item.id === product.id);
  if(exist){
    alert("Item already added");
    return;
  }

  alert('Product is added to cart');

  wishlistcartproduct.push(product);

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

  wishlist.appendChild(cartItem);
  wishlistUpdateTotals();

  const plusBtn = cartItem.querySelector('.plus');
  const quantityValue = cartItem.querySelector('.quantity-value');
  const itemTotal = cartItem.querySelector('.item-total');
  const minusBtn = cartItem.querySelector('.minus');


  plusBtn.addEventListener('click', (e) => {

    e.preventDefault();
    quantity++;
    quantityValue.textContent = quantity;
    itemTotal.textContent = `$${ price * quantity }`;
     wishlistUpdateTotals();
  })

  minusBtn.addEventListener('click', (e) => {

    e.preventDefault();
    if(quantity > 1){
      quantity--;
      quantityValue.textContent = quantity;
      itemTotal.textContent = `$${ (price * quantity) }`;
      wishlistUpdateTotals();
    }else{
      cartItem.classList.add('slide-out');
      
      setTimeout(()=>{
        cartItem.remove();
      wishlistcartproduct = wishlistcartproduct.filter(item => item.id !== product.id);
      wishlistUpdateTotals();
      }, 300)
    }
    
    
  })

}

const wishlistInitApp = () => {

  fetch('product.json')
    .then(res => res.json())
    .then(data => {
      wishlistproduct = data;
      wishlistShowcards();
    })
}

wishlistInitApp();