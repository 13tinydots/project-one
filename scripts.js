/* const button = document.querySelector(".button");
const inputValue = document.querySelector(".input");

button.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue.value +
      "&appid=dbc0e909c76459d6d2b6a5328a9579d5"
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
}); */

import api from "./api.js";
let weather = null;

api.getWeather().then((weatherData) => {
  weather = weatherData;
  console.log(weather);
});
