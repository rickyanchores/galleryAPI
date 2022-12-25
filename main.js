let result = document.querySelector(".result")

//
let pictures = ""
//const ACCESS_KEY:  "DRyWQshwghkCo9Ls_D22kCtG0JYWnKgo3O-yElpbB38";
const unsplashEndpoint = `https://api.unsplash.com/search/photos?client_id=${"DRyWQshwghkCo9Ls_D22kCtG0JYWnKgo3O-yElpbB38"}&query=`;

const response = fetch(unsplashEndpoint + "monkeys")

response
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        //
        let imagesArray = data.results;

        imagesArray.forEach(image => {
            pictures += `<><img src="${image.urls.thumb}" /></>`
        });

        result.innerHTML =pictures
    })