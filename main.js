const cartIcon = document.querySelector(".cart-icon")
const cartTab = document.querySelector(".cart-tab")
const closeBtn = document.querySelector(".close-btn")


cartIcon.addEventListener('click', (e) => {
    
    cartTab.classList.add('cart-tab-active');
    e.preventDefault();

})
closeBtn.addEventListener('click', (e) => {
    
    cartTab.classList.remove('cart-tab-active')
    e.preventDefault();

})