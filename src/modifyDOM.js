import processWeatherData from './processWeatherData';

async function insertWeatherData(event) {
  event.preventDefault();
  const currentWeatherDiv = document.getElementById('current-weather');
  const response = await processWeatherData();
  console.log(response);
  const [x, y] = response.currentAvgTemp;
  console.log(x);
  console.log(y);
  currentWeatherDiv.innerHTML = `${x.toString()} ${y.toString()}`;

  // currentWeatherDiv.innerHTML = response;
}

export default insertWeatherData;
