import getUserInput from './getUserInput';
import insertWeatherData from './modifyDOM';

const initializeEvents = () => {
  const { submitBtn } = getUserInput();
  submitBtn.addEventListener('click', insertWeatherData);
};

export default initializeEvents;
