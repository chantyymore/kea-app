function refreshWeather(response){
    console.log(response.data);
    let temperatureElement = document.querySelector("#weather-app-temperature");
    temperatureElement.innerHTML = Math.round(response.data.temperature.current);
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;
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