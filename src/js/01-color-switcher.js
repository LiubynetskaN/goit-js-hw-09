const startEl = document.querySelector('button[data-start]');
const stopEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startEl.addEventListener('click', startChangeHandler);
stopEl.addEventListener('click', stopChangeHandler);

let timerId = null;
function startChangeHandler() {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
  startEl.disabled = true;
  if (stopEl.hasAttribute('disabled')) {
    stopEl.disabled = false;
  }
}

function startChangeHandler() {
    bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
    if (timerId === null) {
      timerId = setInterval(() => {
        bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
      }, 1000);
      startEl.disabled = true;
      if (stopEl.hasAttribute('disabled')) {
        stopEl.disabled = false;
      }
    }
  }
