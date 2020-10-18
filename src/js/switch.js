const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const bodyRef = document.querySelector('body');
const btnStartRef = document.querySelector('.btn-start-js');
const btnStopRef = document.querySelector('.btn-stop-js');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColorsIndex = () => {
  return randomIntegerFromInterval(0, colors.length - 1);
};

const themeEnable = () => {
  bodyRef.setAttribute(
    'style',
    `background-color:${colors[randomColorsIndex()]}`,
  );
  console.log(bodyRef.getAttribute('style'));
};

let timerId;

function intervalSwitcher() {
  timerId = setInterval(themeEnable, 1000);
}

function closeIntervalswitcher() {
  clearTimeout(timerId);
}

btnStartRef.addEventListener('click', beginSwitch);

btnStopRef.addEventListener('click', stopSwitch);

function beginSwitch(event) {
  intervalSwitcher();
  btnStartRef.setAttribute('disabled', 'true');
}

function stopSwitch(event) {
  clearTimeout(timerId);
  btnStartRef.removeAttribute('disabled');
}
