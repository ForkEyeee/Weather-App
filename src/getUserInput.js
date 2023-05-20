export default function getUserInput() {
  const submitBtn = document.getElementById('search-btn');
  const formInput = document.getElementById('input-location');
  const formInputValue = formInput.value;
  return {
    submitBtn,
    formInput,
    formInputValue,
  };
}
