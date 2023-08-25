let userInput = document.getElementById("userInput");
let tempreture = document.getElementById("temperature");
let place = document.getElementById("place");
let humidityDetials = document.getElementById("humidityDetials");
let windDetials = document.getElementById("windDetials");
let weatherCondition = document.querySelector(".weatherCondition");
let invalid = document.querySelector(".invalid");
let mainContainer = document.querySelector(".main-container");
let searchButton = document.querySelector(".search");
let weatherImg = document.getElementById("weatherImg");

const apiKey = "9499969d7a5ec484fd1cbf0ea409dd6c";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const func = async () => {
    const apiURL2 = `${apiURL}&q=${userInput.value}&appid=${apiKey}`;
    const response = await fetch(apiURL2);
    const data = await response.json();

    console.log(data);

    
    if (data.message == "city not found") {
        mainContainer.classList.add("hide");
        invalid.classList.remove("hide");
    } else {
        mainContainer.classList.remove("hide");
        invalid.classList.add("hide");
        
        humidityDetials.innerHTML = `${data.main.humidity} % <br> Humidity`;
        tempreture.innerText = data.main.temp + " °C"
        place.innerText = data.name;
        weatherCondition.innerHTML = data.weather[0].description;
        windDetials.innerHTML = data.wind.speed + " Km <br> <span>Wind Speed</span>"
    }
    console.log(data.weather[0].main);
    setImg(data.weather[0].main);
}

userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        func();
    }
})

searchButton.addEventListener("click", ()=>{
    func();
})



function setImg(weather){
    if(weather == "Clouds"){
        weatherImg.src = "./img/cloudy.png";
        console.log(weather);
    }
    else if(weather == "Snow"){
        weatherImg.src = "./img/snow.png";
        console.log(weather);
    }
    else if(weather == "Rain" || weather == "Drizzle"){
        weatherImg.src = "./img/rain.png";
        console.log(weather);
    }
    else if(weather == "Clear"){
        weatherImg.src = "./img/sun.png";
    }
} 
