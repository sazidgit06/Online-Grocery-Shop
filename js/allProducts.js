
const initApp = () => {

  fetch('public/product.json')
    .then(res => res.json())
    .then(data => {
      productList = data;
      showCards();
    })
}

initApp();