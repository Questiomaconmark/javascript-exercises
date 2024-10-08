const convertToCelsius = function(fahrTemp) {
  fahrTemp = (fahrTemp - 32) * (5/9);
  fahrTemp = Math.round(fahrTemp * 10) / 10;
  return fahrTemp;
};

const convertToFahrenheit = function(celTemp) {
  celTemp = (celTemp * (9/5)) + 32;
  celTemp = Math.round(celTemp * 10) / 10;
  return celTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
