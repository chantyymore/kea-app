function refreshWeather(response){
    console.log(response.data);
    let temperatureElement = document.querySelector("#weather-app-temperature");
    temperatureElement.innerHTML = Math.round(response.data.temperature.current);
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;
    //for description
    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = response.data.condition.description;
    //for humidity
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    //for wind speed
    let windElement = document.querySelector("#wind-speed");
    windElement.innerHTML = `${response.data.wind.speed}km/h`;
    //for time and date
    
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    timeElement.innerHTML = formatDate(date);
    
}

function formatDate(date){
    let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = days[date.getDay()];
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return `${day} ${hours}:${minutes}`;
}

function searchCity(city){
    let apiKey = "6b534oeab5dabbea88bbtf6452c02346";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    console.log(apiURL);
    axios.get(apiURL).then(refreshWeather);
}

function handleSearchSubmit(event) {  
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    searchCity(searchInputElement.value)
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Midrand");