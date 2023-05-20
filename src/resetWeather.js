function clearWeather() {
  const currentItem = document.getElementById('current-item');
  currentItem.innerHTML = '';
  const forecastWeather = Array.from(
    document.getElementsByClassName('forecast-weather')
  );
  forecastWeather.forEach((day) => {
    day.outerHTML = '';
  });
}

export default clearWeather;
