
const registerPage = document.querySelector(".registerPage")

let registerPageData = [];

const showRegisterPageData = () => {
    console.log(registerPageData)
    const registerPageHtml = `

        <div class="bg-secondary text-light py-5 my-5"
            style="background: url('${registerPageData[0].image}') no-repeat; background-size: cover;">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-md-5 p-3">
                  <div class="section-header">
                    <h2 class="section-title display-5 text-light">${registerPageData[0].title}</h2>
                  </div>
                  <p>${registerPageData[0].subtitle}</p>
                </div>
                <div class="col-md-5 p-3">
                  <form>
                    <div class="mb-3">
                      <label for="name" class="form-label d-none">${registerPageData[0].firstInput}</label>
                      <input type="text" class="form-control form-control-md rounded-0" name="name" id="name"
                        placeholder="Name">
                    </div>
                    <div class="mb-3">
                      <label for="email" class="form-label d-none">${registerPageData[0].secondInput}</label>
                      <input type="email" class="form-control form-control-md rounded-0" name="email" id="email"
                        placeholder="Email Address">
                    </div>
                    <div class="d-grid gap-2">
                      <button type="submit" class="btn btn-dark btn-md rounded-0">${registerPageData[0].submitButton}</button>
                    </div>
                  </form>

                </div>

              </div>

            </div>
        </div>
    `;
    registerPage.insertAdjacentHTML('beforeend', registerPageHtml)
}

const registerPageFetching = () => {
    fetch('public/register.json')
        .then(res => res.json())
        .then(data => {
            registerPageData = data;
            showRegisterPageData();
        })
}

registerPageFetching();
