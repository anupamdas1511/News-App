

const key = `35335cd8df2646b7b48d846c297c1ef3`

let newsAccordion = document.getElementById('newsAccordion')
let carouselInner = document.getElementById('carousal-inner-id')
const xhr = new XMLHttpRequest()

source = 'bbc-news'

xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${key}`, true)

xhr.onload = () => {
    if (xhr.status === 200) {
        let json = JSON.parse(xhr.responseText)
        let articles = json.articles
        let newsHTML = ""
        let slideHTML = ""
        // console.log(articles)
        for(let i=0;i<articles.length;i++) {
            let slide = `<div class="carousel-item active">
                            <img src=${articles[i].urlToImage} class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>${articles[i].title}</h5>
                                <p>${articles[i].description}</p>
                            </div>
                        </div>`
            let news = `<div class="accordion-item my-3">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <strong>${articles[i].title}</strong>
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>${articles[i].description}</strong><br>${articles[i].content}
                                </div>
                            </div>
                        </div>`
            newsHTML += news
            slideHTML += slide
        }
        // articles.forEach(e => {
        //     let slide = `<div class="carousel-item active">
        //                     <img src=${e.urlToImage} class="d-block w-100" alt="...">
        //                     <div class="carousel-caption d-none d-md-block">
        //                         <h5>${e.title}</h5>
        //                         <p>${e.description}</p>
        //                     </div>
        //                 </div>`
        //     let news = `<div class="accordion-item my-3">
        //                     <h2 class="accordion-header" id="headingOne">
        //                         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
        //                             data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        //                             <strong>${e.title}</strong>
        //                         </button>
        //                     </h2>
        //                     <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
        //                         data-bs-parent="#accordionExample">
        //                         <div class="accordion-body">
        //                             <strong>${e.description}</strong><br>${e.content}
        //                         </div>
        //                     </div>
        //                 </div>`
        //     newsHTML += news
        //     slideHTML += slide
        // })
        
        newsAccordion.innerHTML = newsHTML
        carouselInner.innerHTML = slideHTML
    }
    else {
        newsAccordion.innerHTML = 'Some Error Occurred'
    }

}

xhr.send()
