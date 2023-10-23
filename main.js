const apiKey= "1541ac8480539da8b7701428c9ba2e9e"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?q=&appid=&units=imperial&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImage = document.querySelector(".weather-image");

async function weatherSearch(city){
const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
var data = await response.json();




console.log(data)

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "Farenheit";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


if (data.weather[0].main == "Clouds"){
    weatherImage.src = "images/clouds.jpg";

} else if (data.weather[0].main =="Rain"){
    weatherImage.src = "images/rain.gif";

} else if (data.weather[0].main == "snow"){

    weatherImage.src = "images/snow.gif";
}
else if (data.weather[0].main == "sunny"){

    weatherImage.src = "images/sunny.gif";

}

}


searchBtn.addEventListener("click", () => {
    weatherSearch(searchBox.value);
})


weatherSearch();