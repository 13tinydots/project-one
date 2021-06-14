const BASE_URL = "https://api.weatherbit.io/v2.0/forecast/daily?city=";
const API_KEY = "&key=fb8d1c8508e9494f81c57432b5139296";
let inputValue = document.querySelector(".inputValue");

export default {
  getWeather() {
    return fetch(BASE_URL + inputValue + API_KEY)
      .then((res) => res.json())
      .then((weather) => weather);
  },
};
inputValue = "chicago";
