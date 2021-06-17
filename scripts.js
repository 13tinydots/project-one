import api from "./api.js";

let weather = null;
const gif = null;

document.querySelector("form").addEventListener("submit", (ev) => {
  ev.preventDefault();
  api.getWeather(ev.target.elements[0].value).then((weatherData) => {
    weather = weatherData;
    const temp = weather.data[0].temp;
    const wind = weather.data[0].wind_spd;
    const hum = weather.data[0].rh;
    const condition = weather.data[0].weather.description;
  });
});

/* giphy import */
// api.getGif().then((gifData) => {
//   gif = gifData;
//   console.log(gif);
// });
