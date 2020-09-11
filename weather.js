const weather = document.querySelector(".js-weather");

const COORDS = "coords";
const API_KEY = "80d19aa97b409bbff64cef2e1b93ee6d";

function getWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`
        ).then(
            function(response) {
                return response.json();
            }
        ).then(
            function(json) {
                console.log(json);
                const temperature = json.main.temp;
                const place = json.name;
                const description = json.weather[0].description;
                weather.innerText = `${temperature}˚C ${description} @ ${place}`;
            }
        );
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude : latitude,
        longitude : longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handelGeoError() {
    console.log("Cannot access geolocation!");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handelGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    } else {
        const parseCoods = JSON.parse(loadedCoords);
        getWeather(parseCoods.latitude, parseCoods.longitude);
    }
}

function init() {
    loadCoords();
}

init();