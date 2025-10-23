const categorySection = document.querySelector(".category-items");

let categoryItem = [];

const showCategoryItem = () => {

    categoryItem.forEach(item => {
    
    const categoryHtml  = `
    
              <a href="category.html?category=${encodeURIComponent(item.name)}" 
                class="nav-link swiper-slide text-center"
                data-category = "${item.name}">
                <img src="${item.image}" class="rounded-circle" alt="Category Thumbnail">
                <h4 class="fs-6 mt-3 fw-normal category-title">${item.name}</h4>
              </a>
        
    `;

    categorySection.insertAdjacentHTML('beforeend', categoryHtml)

    })

}



const categoryFunction = () => {
    fetch('public/category.json')
        .then(res => res.json())
        .then(data => {
            categoryItem = data;
            showCategoryItem();
        })
}

categoryFunction();