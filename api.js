const weatherUrl = "https://api.weatherbit.io/v2.0/current?city=";
const weatherKey = "&key=fb8d1c8508e9494f81c57432b5139296";
const giphyUrl = "https://api.giphy.com/v1/gifs/search";
const giphyApiKey = "api_key:uyn9unAjUTeMmkxYYnZiNGXLoGvh0rix";

export default {
  getWeather(city) {
    return fetch(weatherUrl + city + weatherKey)
      .then((res) => res.json())
      .then((weather) => weather);
  },
};
//   getGif(gif) {
//     return fetch(giphyUrl + gif + giphyApiKey)
//       .then((res) => res.json())
//       .then((gif) => gif);
//   },
// };
