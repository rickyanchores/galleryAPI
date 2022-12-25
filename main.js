let result = document.querySelector(".result")
let btn = document.querySelector(".btn")
let input = document.querySelector(".input")
//

async function getPhoto(searchName){
    let pictures = ""
    //const ACCESS_KEY:  "DRyWQshwghkCo9Ls_D22kCtG0JYWnKgo3O-yElpbB38";
    const unsplashEndpoint = `https://api.unsplash.com/search/photos?client_id=${"DRyWQshwghkCo9Ls_D22kCtG0JYWnKgo3O-yElpbB38"}&query=`;

  
    const response = fetch(unsplashEndpoint + searchName)

    

    response
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            //
            let imagesArray = data.results;

            imagesArray.forEach(image => {
                pictures += `<img src="${image.urls.thumb}"/>`
            });

            result.innerHTML = pictures
        })
}


// TO REVIEW 
btn.addEventListener("click", () => {
     getPhoto(prompt("enter item name"))
})



