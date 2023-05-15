import 'regenerator-runtime/runtime';

async function fetchWeatherData(query) {
  let response;
  try {
    response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=e4164860ed364899b8b214633231305&q=${query}&days=5`,
      { mode: 'cors' }
    );
    if (!response.ok) {
      throw new Error('Invalid response from the server');
    }
  } catch (error) {
    console.log(error);
  }
  return response;
}

export default fetchWeatherData;

// we want the current temp, current low and high, current humidity, and current windspeed,
// we want average temp for each day of 7 forecast
