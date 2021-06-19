import api from "./api.js";
import convert from "./utils.js";

let weather = null;
const tempText = document.getElementById("temperature");
const windText = document.getElementById("windSpeed");
const humText = document.getElementById("humidity");
const condText = document.getElementById("conditionDesc");
let tempF = null;
let tempC = null;
let temp = null;

document.querySelector("form").addEventListener("submit", (ev) => {
  ev.preventDefault();
  api.getWeather(ev.target.elements[0].value).then((weatherData) => {
    weather = weatherData;
    temp = weather.data[0].app_temp;
    const wind = weather.data[0].wind_spd;
    const hum = weather.data[0].rh;
    const condition = weather.data[0].weather.description;
    tempText.innerText = `${[temp]} degrees`;
    windText.innerText = `${[wind]} m/s`;
    humText.innerText = `${[hum]} percent`;
    condText.innerText = `${[condition]}`;
    tempF = convert.cToF(temp);
    tempC = temp;

    condText.innerHTML = `${[condition]}`;

    if (temp < 1000) {
      api.getGif("ice").then(function (image) {
        tempText.innerHTML = `<img width="${image.data.fixed_height_small_width}" src= "${image.data.fixed_height_small_url}" alt="Random ice 'giffy'" />`;
      });
    } else {
      api.getGif("warm").then(function (image) {
        console.log(image);
        tempText.innerHTML = `<img width="${image.data.fixed_height_small_width}" src= "${image.data.fixed_height_small_url}" alt="Random ice 'giffy'" />`;
      });
    }
    if (wind <= 1) {
      api.getGif("windless").then(function (image) {
        console.log(image);
        windText.innerHTML = `<img width="${image.data.fixed_height_small_width}" src= "${image.data.fixed_height_small_url}" alt="Random ice 'giffy'" />`;
      });
    } else {
      api.getGif("breezy").then(function (image) {
        console.log(image);
        windText.innerHTML = `<img width="${image.data.fixed_height_small_width}" src= "${image.data.fixed_height_small_url}" alt="Random ice 'giffy'" />`;
      });
    }
    if (hum <= 1) {
      api.getGif("desert").then(function (image) {
        console.log(image);
        humText.innerHTML = `<img width="${image.data.fixed_height_small_width}" src= "${image.data.fixed_height_small_url}" alt="Random ice 'giffy'" />`;
      });
    } else {
      api.getGif("moist").then(function (image) {
        console.log(image);
        humText.innerHTML = `<img width="${image.data.fixed_height_small_width}" src= "${image.data.fixed_height_small_url}" alt="Random ice 'giffy'" />`;
      });
    }
  });
});

document.querySelector("section").addEventListener("change", () => {
  if (event.target.value === "C") {
    tempText.innerText = `${[tempC]} degrees`;
  }
  if (event.target.value === "F") {
    tempText.innerText = `${[tempF]} degrees`;
  }
});
