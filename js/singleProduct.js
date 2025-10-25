// Quantity control
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const quantity = document.getElementById("quantity");

// plus.addEventListener("click", () => {
//   quantity.value = parseInt(quantity.value) + 1;
// });

// minus.addEventListener("click", () => {
//   if (quantity.value > 1) quantity.value = parseInt(quantity.value) - 1;
// });

// Copy coupon
const copyBtn = document.getElementById("copyBtn");
const coupon = document.getElementById("coupon");
const productPage = document.querySelector(".product-page");

// copyBtn.addEventListener("click", () => {
//   coupon.select();
//   document.execCommand("copy");
//   copyBtn.textContent = "Copied!";
//   setTimeout(() => (copyBtn.textContent = "Copy"), 1500);
// });


const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

fetch('public/product.json')
  .then(res => res.json())
  .then(data => {
    const product = data.find(p => p.id == productId);

    if(product){
      const div = document.createElement('div');
      div.classList.add('container');
      console.log(product.id)
      div.innerHTML = ` 
      <div class="product-left">
        <div class="product-image">
          <img src="${product.image}" alt="Lucky Box" />
        </div>
      </div>

      <div class="product-right">
        <h1 class="product-title">${product.name}</h1>
        <div class="product-price">
          <span class="current-price">${product.price}</span>
          <span class="old-price">৳ 99</span>
          <span class="discount">-99%</span>
        </div>

        <p class="sold">⭐ 0/5 (0) • 1485 Sold</p>

        <p class="stock out">Available</p>
        <p class="delivery">Delivery time: 7–10 Days</p>

        <div class="quantity-box">
          <label>Quantity</label>
          <div class="quantity-control">
            <button id="minus">−</button>
            <input type="text" id="quantity" value="1" />
            <button id="plus">+</button>
          </div>
        </div>

        <div class="action-buttons">
          <a href="checkout.html"><button class="buy-now">Buy Now</button></a>
          <button class="add-cart">Add to Cart</button>
        </div>

      </div>
      `;
      productPage.appendChild(div);

    }
  })