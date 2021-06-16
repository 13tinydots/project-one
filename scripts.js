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
let gif = null;
// TODO: Grab the form
// TODO: Add an event listener for submission
// TODO: Use the value from that input to pass to...
document.querySelector("form").addEventListener("sumbit", (ev) => {
  ev.preventDefault();

  console.log(ev.target.elements[0].value);

  api.getWeather().then((weatherData) => {
    weather = weatherData;
    console.log(weather);
  });
});
/* giphy import */
api.getGif().then((gifData) => {
  gif = gifData;
  console.log(gif);
});
