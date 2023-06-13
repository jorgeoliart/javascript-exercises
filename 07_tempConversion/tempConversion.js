const convertToCelsius = function(inputFarenheit) {
  // transform Farenheit number into Celsius
  let celsius = (inputFarenheit - 32) * 5 / 9;
  // round Celsius number to have one decimal only
  // return Celsius number
};

const convertToFahrenheit = function(inputCelsius) {
  // transform Celsius number into Farenheit
  let farenheit = ((inputCelsius * 9 / 5) + 32);
  // round Farenheit number to have one decimal only
  // return Farenheit number
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
