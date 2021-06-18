import api from "./api.js";

let weather = null;
const gif = null;
const tempText = document.getElementById("temperature");
const windText = document.getElementById("windSpeed");
const humText = document.getElementById("humidity");
const condText = document.getElementById("conditionDesc");

document.querySelector("form").addEventListener("submit", (ev) => {
  ev.preventDefault();
  api.getWeather(ev.target.elements[0].value).then((weatherData) => {
    weather = weatherData;
    const temp = weather.data[0].app_temp;
    const wind = weather.data[0].wind_spd;
    const hum = weather.data[0].rh;
    const condition = weather.data[0].weather.description;
    console.log(temp);
    console.log(weather);

    tempText.innerText = `${[temp]} degrees`;
    windText.innerText = `${[wind]} m/s`;
    humText.innerText = `${[hum]} percent`;
    condText.innerText = `${[condition]}`;
  });
});

/* giphy import */
// api.getGif().then((gifData) => {
//   gif = gifData;
//   console.log(gif);
// });
