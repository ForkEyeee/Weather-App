import fetchWeatherData from './fetchWeatherData';

async function processWeatherData() {
  let weatherData = await fetchWeatherData('chile');
  weatherData = await weatherData.json();
  console.log(weatherData);
  const currentAvgTemp = weatherData.current.temp_f;
  const currentHigh = weatherData.forecast.forecastday[0].day.maxtemp_f;
  const currentLow = weatherData.forecast.forecastday[0].day.mintemp_f;
  const currentFeelsLike = weatherData.current.feelslike_f;
  const currenthumidity = weatherData.current.humidity;
  const currentwindSpeed = weatherData.current.wind_mph;
  return {
    currentAvgTemp,
    currentHigh,
    currentLow,
    currentFeelsLike,
    currenthumidity,
    currentwindSpeed,
  };
}

export default processWeatherData;

// make variables to store the data we want
