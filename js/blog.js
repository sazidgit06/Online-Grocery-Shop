
const blogId = document.getElementById('blog')

let blogData = [];

const showBlogData = () => {
    console.log((blogData))
    
    const blogHtml = `

        <div class="container-lg">
      <div class="row">
        <div class="section-header d-flex align-items-center justify-content-between my-4">
          <h2 class="section-title">${blogData[0].title}</h2>
          <a href="#" class="btn btn-primary">${blogData[0].viewAllBtn}</a>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <article class="post-item card border-0 shadow-sm p-3">
            <div class="image-holder zoom-effect">
              <a href="#">
                <img src="${blogData[0].image1}" alt="post" class="card-img-top">
              </a>
            </div>
            <div class="card-body">
              <div class="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                <div class="meta-date"><svg width="16" height="16">
                    <use xlink:href="#calendar"></use>
                  </svg>${blogData[0].blog1Date}</div>
                <div class="meta-categories"><svg width="16" height="16">
                    <use xlink:href="#category"></use>
                  </svg>${blogData[0].blog1category}</div>
              </div>
              <div class="post-header">
                <h3 class="post-title">
                  <a href="#" class="text-decoration-none">${blogData[0].blog1title}</a>
                </h3>
                <p>${blogData[0].blog1subtitle}</p>
              </div>
            </div>
          </article>
        </div>
        <div class="col-md-4">
          <article class="post-item card border-0 shadow-sm p-3">
            <div class="image-holder zoom-effect">
              <a href="#">
                <img src="${blogData[0].image2}" alt="post" class="card-img-top">
              </a>
            </div>
            <div class="card-body">
              <div class="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                <div class="meta-date"><svg width="16" height="16">
                    <use xlink:href="#calendar"></use>
                  </svg>${blogData[0].blog2Date}</div>
                <div class="meta-categories"><svg width="16" height="16">
                    <use xlink:href="#category"></use>
                  </svg>${blogData[0].blog2category}</div>
              </div>
              <div class="post-header">
                <h3 class="post-title">
                  <a href="#" class="text-decoration-none">${blogData[0].blog2title}</a>
                </h3>
                <p>${blogData[0].blog2subtitle}</p>
              </div>
            </div>
          </article>
        </div>
        <div class="col-md-4">
          <article class="post-item card border-0 shadow-sm p-3">
            <div class="image-holder zoom-effect">
              <a href="#">
                <img src="${blogData[0].image3}" alt="post" class="card-img-top">
              </a>
            </div>
            <div class="card-body">
              <div class="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                <div class="meta-date"><svg width="16" height="16">
                    <use xlink:href="#calendar"></use>
                  </svg>${blogData[0].blog3Date}</div>
                <div class="meta-categories"><svg width="16" height="16">
                    <use xlink:href="#category"></use>
                  </svg>${blogData[0].blog3category}</div>
              </div>
              <div class="post-header">
                <h3 class="post-title">
                  <a href="#" class="text-decoration-none">${blogData[0].blog3title}</a>
                </h3>
                <p>${blogData[0].blog3subtitle}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
    
    `;
    blogId.insertAdjacentHTML('beforeend', blogHtml)

}

const blogDataFetching = () => {
    fetch('public/blog.json')
        .then(res => res.json())
        .then(data => {
            blogData = data;
            showBlogData();
        })
}

blogDataFetching();