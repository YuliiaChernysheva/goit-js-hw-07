const userNameInputElem = document.querySelector('#name-input');
const userNameOutputElem = document.querySelector('#name-output');

userNameInputElem.addEventListener('input', handleUserNameInput);

function handleUserNameInput(e) {
  const trimmedValue = e.target.value.trim();

  if (trimmedValue === '') {
    userNameOutputElem.textContent = 'Anonymous';
  } else {
    userNameOutputElem.textContent = trimmedValue;
  }
}
