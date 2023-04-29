let result = document.querySelector(".result")
let btn = document.querySelector(".btn")

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
            
            // Fetch result
            let imagesArray = data.results ;

            imagesArray.forEach(image => {
                pictures += `<div data-aos="fade-left" class="picture-container">
                <img src="${image.urls.raw}"/>
                <p>${image.description}</p>
                <p>Likes: ${image.likes}</p>
                <p>${image.user.first_name}</p>
                <p>${image.user.last_name}</p>
                <p>${image.user.location}</p>
                            </div>
`
            });


            // to RENDER
            result.innerHTML = pictures
        })
}


// TO REVIEW 
btn.addEventListener("click", () => {
     getPhoto(prompt("enter item name"))
})



