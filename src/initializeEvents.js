import processWeatherData from './processWeatherData';
import getUserInput from './getUserInput';

const initializeEvents = () => {
  const { submitBtn } = getUserInput();
  submitBtn.addEventListener('click', processWeatherData);
};

export default initializeEvents;
