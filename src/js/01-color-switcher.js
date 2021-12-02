const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerInterval = null;

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);

function onStartClick() {
    if (!startBtn.hasAttribute('inactive')) {
        startBtn.setAttribute('inactive', 'inactive')
        changeBodyColor();
    }
};


function onStopClick() {
    startBtn.removeAttribute('inactive', 'inactive');
    clearInterval(timerInterval);
};


function changeBodyColor() {
    timerInterval = setInterval(() => {
        const newColor = getRandomHexColor();
        body.style.backgroundColor = newColor;
    }, 1000);
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};