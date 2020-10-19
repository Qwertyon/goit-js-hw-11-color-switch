const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let timerId;

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
  bodyRef.style.backgroundColor = colors[randomColorsIndex()]
};

const intervalSwitcher = () => {
  timerId = setInterval(themeEnable, 1000);
}

const closeIntervalswitcher = () => {
  clearTimeout(timerId);
}

const beginSwitch = () => {
  intervalSwitcher();
  btnStartRef.setAttribute('disabled', 'true');
}

const stopSwitch = () => {
  clearTimeout(timerId);
  btnStartRef.removeAttribute('disabled');
}

btnStartRef.addEventListener('click', beginSwitch);

btnStopRef.addEventListener('click', stopSwitch);


