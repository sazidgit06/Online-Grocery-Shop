
const tabList = document.querySelector(".tab-list");

let navbarTabProduct = [];


const showTab = () => {
  console.log(navbarTabProduct)
  navbarTabProduct.forEach(tabProduct => {

    const tablisthtml = `
    
      <li class="nav-item border-dashed active">
          <a href="category.html?category=${encodeURIComponent(tabProduct.name)}"  class="nav-link d-flex align-items-center gap-3 text-dark p-2 category-btn">
            ${tabProduct.icon}
            <span>${tabProduct.name}</span>
          </a>
        </li>

    `;

    tabList.insertAdjacentHTML("beforeend", tablisthtml);

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


navbarLeftTab();
