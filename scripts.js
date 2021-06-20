import api from "./api.js";
import convert from "./utils.js";

let weather = null;
const tempText = document.getElementById("temperature");
const windText = document.getElementById("windSpeed");
const humText = document.getElementById("humidity");
const condText = document.getElementById("conditionDesc");
const tempDisp = document.getElementById("tempDisp");
const windDisp = document.getElementById("windDisp");
const humDisp = document.getElementById("humDisp");
const condDisp = document.getElementById("condDisp");
let tempF = null;
let tempC = null;
let temp = null;
let tempCon = null;
const mood = document.getElementById("mood");
document.querySelector("form").addEventListener("submit", (ev) => {
  ev.preventDefault();
  api.getWeather(ev.target.elements[0].value).then((weatherData) => {
    weather = weatherData;
    temp = Math.round(weather.data[0].app_temp);
    tempCon = Math.round(weather.data[0].app_temp);
    const wind = weather.data[0].wind_spd;
    const hum = weather.data[0].rh;
    const condition = weather.data[0].weather.description;
    tempDisp.innerText = `${[temp]} ° `;
    windDisp.innerText = `${[wind]} m/s`;
    humDisp.innerText = `${[hum]} %`;
    condDisp.innerText = `${[condition]}`;

    tempF = convert.cToF(tempCon);
    tempC = tempCon;

    // eslint-disable-next-line no-self-compare
    if (condition === condition)
      api.getGif(`${[condition]}`).then(function (image) {
        condText.innerHTML = `<img width="${image.data.images.downsized_medium}" src= "${image.data.images.downsized_medium.url}" alt="Random ice 'giffy'" />`;
      });

    if (temp <= 0) {
      api.getGif("ice cold").then(function (image) {
        tempText.innerHTML = `<img width="${image.data.images.downsized_medium}" src= "${image.data.images.downsized_medium.url}" alt="Random ice 'giffy'" /
        >`;
      });
    } else {
      api.getGif("heat wave").then(function (image) {
        tempText.innerHTML = `<img width="${image.data.images.downsized_medium}" src= "${image.data.images.downsized_medium.url}" alt="Random ice 'giffy'" />`;
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
    tempDisp.innerText = `${[tempC]} °`;
  }
  if (event.target.value === "F") {
    tempDisp.innerText = `${[tempF]} °`;
  }
});
