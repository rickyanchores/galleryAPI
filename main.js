let result = document.querySelector(".result")

//
let pictures = ""

const ACCESS_KEY: "yFOK9XcbPhl8ZG0APH1LPbMwf54xE5hpdQMqd5_VbYQ";
const unsplashEndpoint = `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&query=`;

const response = fetch(unsplashEndpoint + "monkeys")

response.then(res => {
    console.log(res);
  });