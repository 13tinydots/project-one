import api from "./api.js";
import convert from "./utils.js";

let weather = null;
const gif = null;
const tempText = document.getElementById("temperature");
const windText = document.getElementById("windSpeed");
const humText = document.getElementById("humidity");
const condText = document.getElementById("conditionDesc");
let tempWord = null;
let windWord = null;
let humWord = null;
const giffyWords = [];
const gifs = [];

document.querySelector("form").addEventListener("submit", (ev) => {
  ev.preventDefault();
  api.getWeather(ev.target.elements[0].value).then((weatherData) => {
    weather = weatherData;
    const temp = weather.data[0].app_temp;
    const wind = weather.data[0].wind_spd;
    const hum = weather.data[0].rh;
    const condition = weather.data[0].weather.description;

    condText.innerHTML = `${[condition]}`;

    if (temp < 1000) {
      tempWord = "ice";
      api.getGif("ice").then(function (image) {
        tempText.innerHTML = `<img width="${image.data.fixed_height_small_width}" src= "${image.data.fixed_height_small_url}" alt="Random ice 'giffy'" />`;
      });
    } else {
      tempWord = "warm";
      api.getGif("warm").then(function (image) {
        console.log(image);
        tempText.innerHTML = `<img width="${image.data.fixed_height_small_width}" src= "${image.data.fixed_height_small_url}" alt="Random ice 'giffy'" />`;
      });
    }
    if (wind <= 1) {
      windWord = "windless";
      api.getGif("windless").then(function (image) {
        console.log(image);
        windText.innerHTML = `<img width="${image.data.fixed_height_small_width}" src= "${image.data.fixed_height_small_url}" alt="Random ice 'giffy'" />`;
      });
    } else {
      windWord = "breezy";
      api.getGif("breezy").then(function (image) {
        console.log(image);
        windText.innerHTML = `<img width="${image.data.fixed_height_small_width}" src= "${image.data.fixed_height_small_url}" alt="Random ice 'giffy'" />`;
      });
    }
    if (hum <= 1) {
      humWord = "desert";
      api.getGif("desert").then(function (image) {
        console.log(image);
        humText.innerHTML = `<img width="${image.data.fixed_height_small_width}" src= "${image.data.fixed_height_small_url}" alt="Random ice 'giffy'" />`;
      });
    } else {
      humWord = "moist";
      api.getGif("moist").then(function (image) {
        console.log(image);
        humText.innerHTML = `<img width="${image.data.fixed_height_small_width}" src= "${image.data.fixed_height_small_url}" alt="Random ice 'giffy'" />`;
      });
    }
  });
});
