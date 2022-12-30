let result = document.querySelector(".result")
let rawResult = document.querySelector(".rawResult")
let regularResult = document.querySelector(".regularResult")
let bigResult = document.querySelector(".bigResult")
let btn = document.querySelector(".btn")

//

async function getPhoto(searchName){
    let pictures = ""
    let rawPicture = ""
    let bigPictures = ""
    let regularPictures = ""
    //const ACCESS_KEY:  "DRyWQshwghkCo9Ls_D22kCtG0JYWnKgo3O-yElpbB38";
    const unsplashEndpoint = `https://api.unsplash.com/search/photos?client_id=${"DRyWQshwghkCo9Ls_D22kCtG0JYWnKgo3O-yElpbB38"}&query=`;

  
    const response = fetch(unsplashEndpoint + searchName)

    

    response
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            //
            let imagesArray = data.results ;

            imagesArray.forEach(image => {
                pictures += `<img src="${image.urls.thumb}"/>
                              <p>${image.description}</p>`
            });


            // Fetch Raw Result

            let rawImageArray = data.results

            rawImageArray.forEach(rawImage => {
                rawPicture += `<img src="${rawImage.urls.raw}"/>
                                <p>${rawImage.description}</p>`
            })


            //FETCH Regular Size

            

            let regularImageArray = data.results;

            regularImageArray.forEach((regularImage) => {
                regularPictures += `<img src="${regularImage.urls.regular}"/>`
            })

            



            //Fetch big image

            let bigImagesArray = data.results;

            bigImagesArray.forEach(bigImage => {
                bigPictures += `<img src="${bigImage.urls.full} />`
            })


            result.innerHTML = pictures
            rawResult.innerHTML = rawPicture
            regularResult.innerHTML = regularPictures
            bigResult.innerHTML = bigPictures
        })
}


// TO REVIEW 
btn.addEventListener("click", () => {
     getPhoto(prompt("enter item name"))
})



