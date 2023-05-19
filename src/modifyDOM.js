import processWeatherData from './processWeatherData';

async function insertWeatherData(event) {
  event.preventDefault();
  const currentWeatherDiv = document.getElementById('current-weather');
  const forecastWeather = Array.from(
    document.getElementsByClassName('forecast-weather')
  );
  const response = await processWeatherData();
  console.log(response);
  const [currentAvgTempF, currentAvgTempC] = response.currentAvgTemp;
  const [currentHighF, currentHighC] = response.currentHigh;
  const [currentLowF, currentLowC] = response.currentLow;
  const [currentFeelsLikeF, currentFeelsLikeC] = response.currentFeelsLike;
  const currentHumidity = response.currenthumidity;
  const [currentWindSpeedMPH, currentwindSpeedKPM] = response.currentwindSpeed;
  const { sundayAvgTemp } = response;
  const { mondayAvgTemp } = response;
  const { tuesdayAvgTemp } = response;
  const { wednesdayAvgTemp } = response;
  const { thursdayAvgTemp } = response;
  const { fridayAvgTemp } = response;
  const { saturdayAvgTemp } = response;

  currentWeatherDiv.innerHTML = `${currentAvgTempF.toString()} 
${currentAvgTempC.toString()}
${currentHighF.toString()}
${currentHighC.toString()} 
${currentLowF.toString()} 
${currentLowC.toString()}
${currentFeelsLikeF.toString()} 
${currentFeelsLikeC.toString()} 
${currentHumidity.toString()}
${currentWindSpeedMPH.toString()} 
${currentwindSpeedKPM.toString()}`;
  forecastWeather[0].innerHTML = sundayAvgTemp;
  forecastWeather[1].innerHTML = mondayAvgTemp;
  forecastWeather[2].innerHTML = tuesdayAvgTemp;
  forecastWeather[3].innerHTML = wednesdayAvgTemp;
  forecastWeather[4].innerHTML = thursdayAvgTemp;
  forecastWeather[5].innerHTML = fridayAvgTemp;
  forecastWeather[6].innerHTML = saturdayAvgTemp;
}

export default insertWeatherData;
