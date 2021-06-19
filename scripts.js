import api from "./api.js";
import convert from "./utils.js";

let weather = null;
let gif = null;
const tempText = document.getElementById("temperature");
const windText = document.getElementById("windSpeed");
const humText = document.getElementById("humidity");
const condText = document.getElementById("conditionDesc");
let tempF = null;
let tempC = null;
let tempWord = null;
let windWord = null;
let temp = null;
let humWord = null;

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
    numbersToWords();

    function numbersToWords() {
      if (temp.value < 0) {
        tempWord = "ice";
      } else {
        tempWord = "warm";
      }
      if (wind.value <= 1) {
        windWord = "windless";
      } else {
        windWord = "breezy";
      }
      if (hum <= 1) {
        humWord = "desert";
      } else {
        humWord = "moist";
      }
    }

    const giphySearch = [];
    giphySearch.push(tempWord, windWord, humWord, condition);
    console.log(giphySearch);
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

/* giphy import */
api.getGif().then((gifData) => {
  gif = gifData;
  console.log(gif);
});
