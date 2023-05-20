import 'regenerator-runtime/runtime';
import getUserInput from './getUserInput';

async function fetchWeatherData() {
  const { formInputValue } = getUserInput();
  let response;
  try {
    response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=e4164860ed364899b8b214633231305&q=${formInputValue}&days=7`,
      { mode: 'cors' }
    );
    if (!response.ok) {
      throw new Error('Invalid response from the server');
    }
  } catch (error) {
    console.log(error);
    alert('Please enter a valid location');
  }

  return response;
}
export default fetchWeatherData;
