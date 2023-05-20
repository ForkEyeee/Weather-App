import fetchWeatherData from './fetchWeatherData';
import getUserInput from './getUserInput';

async function processWeatherData() {
  const { formInputValue } = getUserInput();
  let weatherData;
  if (formInputValue !== '') {
    weatherData = await fetchWeatherData();
    weatherData = await weatherData.json();
    const currentAvgTemp = [
      weatherData.current.temp_f,
      weatherData.current.temp_c,
    ];
    const currentHigh = [
      weatherData.forecast.forecastday[0].day.maxtemp_f,
      weatherData.forecast.forecastday[0].day.maxtemp_c,
    ];
    const currentLow = [
      weatherData.forecast.forecastday[0].day.mintemp_f,
      weatherData.forecast.forecastday[0].day.mintemp_c,
    ];
    const currentFeelsLike = [
      weatherData.current.feelslike_f,
      weatherData.current.feelslike_c,
    ];
    const currenthumidity = weatherData.current.humidity;
    const currentwindSpeed = [
      weatherData.current.wind_mph,
      weatherData.current.wind_kph,
    ];
    const sundayAvgTemp = [
      weatherData.forecast.forecastday[0].day.avgtemp_f,
      weatherData.forecast.forecastday[0].day.avgtemp_c,
    ];
    const mondayAvgTemp = [
      weatherData.forecast.forecastday[1].day.avgtemp_f,
      weatherData.forecast.forecastday[1].day.avgtemp_c,
    ];
    const tuesdayAvgTemp = [
      weatherData.forecast.forecastday[2].day.avgtemp_f,
      weatherData.forecast.forecastday[2].day.avgtemp_c,
    ];
    const wednesdayAvgTemp = [
      weatherData.forecast.forecastday[3].day.avgtemp_f,
      weatherData.forecast.forecastday[3].day.avgtemp_c,
    ];
    const thursdayAvgTemp = [
      weatherData.forecast.forecastday[4].day.avgtemp_f,
      weatherData.forecast.forecastday[4].day.avgtemp_c,
    ];
    const fridayAvgTemp = [
      weatherData.forecast.forecastday[5].day.avgtemp_f,
      weatherData.forecast.forecastday[5].day.avgtemp_c,
    ];
    const saturdayAvgTemp = [
      weatherData.forecast.forecastday[6].day.avgtemp_f,
      weatherData.forecast.forecastday[6].day.avgtemp_c,
    ];

    weatherData = {
      currentAvgTemp,
      currentHigh,
      currentLow,
      currentFeelsLike,
      currenthumidity,
      currentwindSpeed,
      sundayAvgTemp,
      mondayAvgTemp,
      tuesdayAvgTemp,
      wednesdayAvgTemp,
      thursdayAvgTemp,
      fridayAvgTemp,
      saturdayAvgTemp,
    };
  }
  return weatherData;
}

export default processWeatherData;
