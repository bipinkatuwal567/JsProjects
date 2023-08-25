let button = document.getElementById("button");
let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let qrContainer = document.getElementById("qr-container");
let qrImage = document.getElementById("qr-img");
let userInput = document.getElementById("input");

// console.log(qrContainer)

button.addEventListener("click", () =>{
    let url2 = url + userInput.value;

    qrImage.src = url2;
    qrContainer.classList.add("show-qr");
})