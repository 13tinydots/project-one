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
const mood = document.getElementById("mood");
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

    // eslint-disable-next-line no-self-compare
    if (condition === condition)
      api.getGif(`${[condition]}`).then(function (image) {
        condText.innerHTML = `<img width="${image.data.images.downsized_medium}" src= "${image.data.images.downsized_medium.url}" alt="Random ice 'giffy'" />`;
      });

    if (temp <= 0) {
      api.getGif("ice cold").then(function (image) {
        tempText.innerHTML = `<img width="${image.data.images.downsized_medium}" src= "${image.data.images.downsized_medium.url}" alt="Random ice 'giffy'" /
        >`;
        console.log(image);
      });
    } else {
      api.getGif("heat wave").then(function (image) {
        tempText.innerHTML = `<img width="${image.data.images.downsized_medium}" src= "${image.data.images.downsized_medium.url}" alt="Random ice 'giffy'" />`;
        console.log(image);
      });
    }
    if (wind <= 1) {
      api.getGif("calm").then(function (image) {
        windText.innerHTML = `<img width="${image.data.images.downsized_medium}" src= "${image.data.images.downsized_medium.url}" alt="Random ice 'giffy'" />`;
      });
    } else {
      api.getGif("windy").then(function (image) {
        windText.innerHTML = `<img width="${image.data.images.downsized_medium}" src= "${image.data.images.downsized_medium.url}" alt="Random ice 'giffy'" />`;
      });
    }
    if (hum <= 1) {
      api.getGif("dry heat").then(function (image) {
        humText.innerHTML = `<img width="${image.data.images.downsized_medium}" src= "${image.data.images.downsized.url}" alt="Random ice 'giffy'" />`;
      });
    } else {
      api.getGif("humid").then(function (image) {
        humText.innerHTML = `<img width="${image.data.images.downsized_medium}" src= "${image.data.images.downsized.url}" alt="Random ice 'giffy'" />`;
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
