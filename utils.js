// C/F Converter//
export default {
  cToF(celsius) {
    const cTemp = celsius;
    const convertedTempF = (cTemp * 9) / 5 + 32;
    return convertedTempF;
  },
  fToC(fahrenheit) {
    const fTemp = fahrenheit;
    const convertedTempC = ((fTemp - 32) * 5) / 9;
    return convertedTempC;
  },
};
