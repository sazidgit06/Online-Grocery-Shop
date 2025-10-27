
const nav = document.querySelector(".total-navbar")

let navbarData = [];

const showNavbarData = () => {
    console.log(navbarData[0].option1)

    const navbarHtml = 
    `
        <div
          class="col-sm-4 col-lg-2 text-center text-sm-start d-flex gap-3 justify-content-center justify-content-md-start">
          <div class="d-flex align-items-center my-3 my-sm-0">
            <a href="index.html">
              <img src="${navbarData[0].logo}" alt="logo" class="img-fluid">
            </a>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar">
            ${navbarData[0].menuIcon}
          </button>
        </div>

        <div class="col-sm-6 offset-sm-2 offset-md-0 col-lg-4">
          <div class="search-bar row bg-light p-2 rounded-4">

            

            <div class="col-11 col-md-7">
              <form id="search-form" class="text-center" action="index.html" method="post">
                <input type="text" class="form-control border-0 bg-transparent"
                  placeholder="${navbarData[0].inputPlaceholder}">
              </form>
            </div>
            <div class="col-1">
              ${navbarData[0].searchIcon}
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <ul
            class="navbar-nav list-unstyled d-flex flex-row gap-3 gap-lg-5 justify-content-center flex-wrap align-items-center mb-0 fw-bold text-uppercase text-dark">
            <li class="nav-item active">
              <a href="index.html" class="nav-link">${navbarData[0].homeTitle}</a>
            </li>
            <li class="nav-item dropdown position-relative">
              <a class="nav-link dropdown-toggle pe-3" role="button" id="pages" data-bs-toggle="dropdown"
                aria-expanded="false">${navbarData[0].pageTitle}</a>
              <ul class="dropdown-menu position-absolute border-0 p-3 rounded-0 shadow" aria-labelledby="pages">
                <li><a href="about.html" class="dropdown-item">${navbarData[0].aboutTitle}</a></li>
                <li><a href="allProducts.html" class="dropdown-item">${navbarData[0].shopTitle}</a></li>
                <li><a href="blog.html" class="dropdown-item">${navbarData[0].blogTitle}</a></li>
                <li><a href="contactUs.html" class="dropdown-item">${navbarData[0].contactTitle}</a></li>
                <li><a href="faq.html" class="dropdown-item">FAQ</a></li>
                <li><a href="index.html" class="dropdown-item">${navbarData[0].profileTitle}</a></li>

              </ul>
            </li>
          </ul>
        </div>

        <div class="col-sm-8 col-lg-2 d-flex gap-5 align-items-center justify-content-center justify-content-sm-end">
          <ul class="d-flex justify-content-end list-unstyled m-0 navbar-icons">
            <li>
              <a href="#" class="p-2 mx-1">
                ${navbarData[0].profileIcon}
              </a>
            </li>
            

            <li class="cart-btn" type="button" data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWishlist" aria-controls="offcanvasWishlist">
              <a href="#" class="p-2 mx-1 wishlist">
              ${navbarData[0].wishlistIcon}</a>
              <span class="total-wishlist">0</span>
          </li>
            <li class="cart-btn" type="button" data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
              <a href="#" class="p-2 mx-1 cart-icon">
              ${navbarData[0].cartIcon}</a>
              <span class="total-cart">0</span>
          </li>
           

          </ul>
        </div>
    `;
    nav.insertAdjacentHTML('beforeend', navbarHtml);

}

const navbarDataFetching = () => {
    fetch('public/navbar.json')
        .then(res => res.json())
        .then(data => {
            navbarData = data;
            showNavbarData();
        })
}

navbarDataFetching();