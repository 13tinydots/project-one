import api from "./api.js";

let weather = null;
const gif = null;

document.querySelector("form").addEventListener("submit", (ev) => {
  ev.preventDefault();

  console.log(ev.target.elements[0].value);

  api.getWeather(ev.target.elements[0].value).then((weatherData) => {
    weather = weatherData;
    console.log(weather);
  });
});

/* giphy import */
// api.getGif().then((gifData) => {
//   gif = gifData;
//   console.log(gif);
// });
