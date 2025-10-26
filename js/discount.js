
const discountPage = document.querySelector(".discountPage");

let discountData = [];

const showDiscountData = () => {
    console.log(discountData[0].title1);

    const div = document.createElement('div');
    div.classList.add('banner-blocks');
    div.innerHTML = `
             <div class="banner-ad d-flex align-items-center large bg-info block-1"
              style="background: url('${discountData[0].bannerImage1}') no-repeat; background-size: cover;">
              <div class="banner-content p-5">
                <div class="content-wrapper text-light">
                  <h3 class="banner-title text-light">${discountData[0].title1}</h3>
                  <p>${discountData[0].discount1}</p>
                  <a href="#" class="btn-link text-white">${discountData[0].button}</a>
                </div>
              </div>
            </div>

            <div class="banner-ad bg-success-subtle block-2"
              style="background:url('${discountData[0].bannerImage2}') no-repeat;background-size: cover">
              <div class="banner-content align-items-center p-5">
                <div class="content-wrapper text-light">
                  <h3 class="banner-title text-light">${discountData[0].title2}</h3>
                  <p>${discountData[0].discount2}</p>
                  <a href="#" class="btn-link text-white">${discountData[0].button}</a>
                </div>
              </div>
            </div>

            <div class="banner-ad bg-danger block-3"
              style="background:url('${discountData[0].bannerImage3}') no-repeat;background-size: cover">
              <div class="banner-content align-items-center p-5">
                <div class="content-wrapper text-light">
                  <h3 class="banner-title text-light">${discountData[0].title3}</h3>
                  <p>${discountData[0].discount3}</p>
                  <a href="#" class="btn-link text-white">${discountData[0].button}</a>
                </div>
              </div>
            </div> 
    `;
    discountPage.appendChild(div)
}


const fetchingDiscountData = () => {
    fetch('public/discount.json')
    .then(res => res.json())
    .then(data => {
        discountData = data;
        showDiscountData();
    })
}

fetchingDiscountData();


