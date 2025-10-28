const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const quantity = document.getElementById("quantity");


const copyBtn = document.getElementById("copyBtn");
const coupon = document.getElementById("coupon");
const productPage = document.querySelector(".product-page");


const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const singleProductTotal = () => {
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
};

fetch('public/product.json')
  .then(res => res.json())
  .then(data => {
    const product = data.find(p => p.id == productId);

    if (product) {
      const div = document.createElement('div');
      div.classList.add('container');
      div.innerHTML = ` 
      <div class="product-left">
        <div class="product-image" id="imageZoom" style="
          --url: url(${product.image});
          --zoom-x: 0%; --zoom-y: 0%;
          --display: none
        ">
          <img src="${product.image}" alt="Lucky Box" />
        </div>
        <div class="thumbnail-container">
                <div class="thumbnail active" data-img="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800" data-zoom="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1600">
                    <img src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200" alt="Thumb 1">
                </div>
                <div class="thumbnail" data-img="https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=800" data-zoom="https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=1600">
                    <img src="https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=200" alt="Thumb 2">
                </div>
                <div class="thumbnail" data-img="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800" data-zoom="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=1600">
                    <img src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=200" alt="Thumb 3">
                </div>
                <div class="thumbnail" data-img="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800" data-zoom="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1600">
                    <img src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200" alt="Thumb 4">
                </div>
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
            <button class="minus">−</button>
            <input type="text" class="quantity" value="1" />
            <button class="plus">+</button>
          </div>
        </div>

        <div class="action-buttons">
          <a href="shipping.html"><button class="buy-now">Buy Now</button></a>
          
          <button class="add-cart cartbtn">Add to Cart</button>
        </div>

      </div>
      `;

      productPage.appendChild(div);
      let imageZoom = document.getElementById('imageZoom');
      imageZoom.addEventListener('mousemove', (e) => {
        imageZoom.style.setProperty('--display', 'block');
        let pointer = {
          x: (e.offsetX * 100) / imageZoom.offsetWidth,
          y: (e.offsetY * 100) / imageZoom.offsetHeight
        }
        imageZoom.style.setProperty('--zoom-x', pointer.x + '%');
        imageZoom.style.setProperty('--zoom-y', pointer.y + '%');
      })
      imageZoom.addEventListener('mouseout', () => {
        imageZoom.style.setProperty('--display', 'none');
      })

      // image zoom in end

      // plus minus button functionality

      const minusBtn = document.querySelector(".minus");
      const plusBtn = document.querySelector(".plus");
      const quantityInput = document.querySelector(".quantity");

      plusBtn.addEventListener("click", () => {
        let currentValue = parseInt(quantityInput.value);

        quantityInput.value = currentValue + 1;
        console.log(currentValue)
      });

      minusBtn.addEventListener("click", () => {
        let currentValue = parseInt(quantityInput.value);

        if (currentValue > 1) {
          quantityInput.value = currentValue - 1;
          console.log(currentValue)
        }
      });

      // plus minus button functionality end

      // add to cart 

      const cartBtn = document.querySelector('.cartbtn');
      const wishlistbtn = document.querySelector('.wishlistCart');

      cartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // document.querySelector(".total-cart").textContent = cartProduct.length + 1;
        addToCart(product);

      })

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

        singleProductTotal();

        const deleteBtn = cartList.querySelector("li:last-child .delete-btn");

        deleteBtn.addEventListener('click', (e) => {

          e.preventDefault();
          document.querySelector(".total-cart").textContent = cartProduct.length + 1;

          const li = e.target.closest("li");
          li.classList.add("slide-out");

          setTimeout(() => {
            li.remove();
            cartProduct = cartProduct.filter(item => item.id !== product.id);
            singleProductTotal();
          }, 300);
        })

      }

    }
  })




