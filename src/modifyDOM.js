import processWeatherData from './processWeatherData';
import clearWeather from './resetWeather';

async function insertWeatherData(event) {
  event.preventDefault();
  let toggleWeather;
  const toggleBtn = document.getElementById('temp-toggle');
  const currentWeather = document.getElementById('current-weather');
  const currentItem = document.getElementById('current-item');
  const response = await processWeatherData();
  const [currentAvgTempF, currentAvgTempC] = response.currentAvgTemp;
  const [currentHighF, currentHighC] = response.currentHigh;
  const [currentLowF, currentLowC] = response.currentLow;
  const [currentFeelsLikeF, currentFeelsLikeC] = response.currentFeelsLike;
  const currentHumidity = response.currenthumidity;
  const [currentWindSpeedMPH, currentwindSpeedKPH] = response.currentwindSpeed;
  const [sundayAvgTempF, sundayAvgTempC] = response.sundayAvgTemp;
  const [mondayAvgTempF, mondayAvgTempC] = response.mondayAvgTemp;
  const [tuesdayAvgTempF, tuesdayAvgTempC] = response.tuesdayAvgTemp;
  const [wednesdayAvgTempF, wednesdayAvgTempC] = response.wednesdayAvgTemp;
  const [thursdayAvgTempF, thursdayAvgTempC] = response.thursdayAvgTemp;
  const [fridayAvgTempF, fridayAvgTempC] = response.fridayAvgTemp;
  const [saturdayAvgTempF, saturdayAvgTempC] = response.saturdayAvgTemp;
  clearWeather();

  for (let i = 0; i <= 5; i += 1) {
    const para = document.createElement('p');
    para.classList.add('current-para');
    currentItem.appendChild(para);
  }

  for (let i = 1; i <= 7; i += 1) {
    const div = document.createElement('div');
    div.classList.add('forecast-weather');
    currentWeather.appendChild(div);
  }
  const currentPara = Array.from(
    document.getElementsByClassName('current-para')
  );
  const forecastWeather = Array.from(
    document.getElementsByClassName('forecast-weather')
  );

  function updateWeather(toggle) {
    const toggleStatus = toggle;
    currentPara[0].innerHTML = toggleStatus
      ? `Avg Temp: ${currentAvgTempF.toString()}°F`
      : `Avg Temp: ${currentAvgTempC.toString()}°C`;
    currentPara[1].innerHTML = toggleStatus
      ? `High: ${currentHighF.toString()}°F`
      : `High: ${currentHighC.toString()}°C`;
    currentPara[2].innerHTML = toggleStatus
      ? `Low: ${currentLowF.toString()}°F`
      : `Low: ${currentLowC.toString()}°C`;
    currentPara[3].innerHTML = toggleStatus
      ? `Feels Like: ${currentFeelsLikeF.toString()}°F`
      : `Feels Like: ${currentFeelsLikeC.toString()}°C`;
    currentPara[4].innerHTML = `Current Humidity: ${currentHumidity.toString()}%`;
    currentPara[5].innerHTML = toggleStatus
      ? `Current WindSpeed: ${currentWindSpeedMPH.toString()} mph`
      : `Current WindSpeed: ${currentwindSpeedKPH.toString()} kph`;

    forecastWeather[0].innerHTML = toggleStatus
      ? `Sunday: ${sundayAvgTempF}°F`
      : `Sunday: ${sundayAvgTempC}°C`;
    forecastWeather[1].innerHTML = toggleStatus
      ? `Monday: ${mondayAvgTempF}°F`
      : `Monday: ${mondayAvgTempC}°C`;
    forecastWeather[2].innerHTML = toggleStatus
      ? `Tuesday: ${tuesdayAvgTempF}°F`
      : `Tuesday: ${tuesdayAvgTempC}°C`;
    forecastWeather[3].innerHTML = toggleStatus
      ? `Wednesday: ${wednesdayAvgTempF}°F`
      : `Wednesday: ${wednesdayAvgTempC}°C`;
    forecastWeather[4].innerHTML = toggleStatus
      ? `Thursday: ${thursdayAvgTempF}°F`
      : `Thursday: ${thursdayAvgTempC}°C`;
    forecastWeather[5].innerHTML = toggleStatus
      ? `Friday: ${fridayAvgTempF}°F`
      : `Friday: ${fridayAvgTempC}°C`;
    forecastWeather[6].innerHTML = toggleStatus
      ? `Saturday: ${saturdayAvgTempF}°F`
      : `Saturday: ${saturdayAvgTempC}°C`;
  }
  toggleBtn.addEventListener('click', () => {
    toggleWeather = !toggleWeather;
    updateWeather(toggleWeather);
  });
  updateWeather();
}

export default insertWeatherData;
