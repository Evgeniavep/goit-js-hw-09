import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector('[data-start]');
startBtn.addEventListener('click', onStartClick);

const daysLeft = document.querySelector('[data-days]');
const hoursLeft = document.querySelector('[data-hours]');
const minutesLeft = document.querySelector('[data-minutes]');
const secondsLeft = document.querySelector('[data-seconds]');

let interval = null;
let userDate = null;
let timeLeft = null;


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= options.defaultDate) {
            alert("Please choose a date in the future");
            startBtn.setAttribute('disabled', 'disabled');
            return;
        }
        startBtn.removeAttribute('disabled', 'disabled');
        userDate = selectedDates[0];
        daysLeft.textContent = '00';
        hoursLeft.textContent = '00';
        minutesLeft.textContent = '00';
        secondsLeft.textContent = '00';
    },

};

flatpickr('#datetime-picker', options);


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
};


const timer = () => {
    timeLeft = userDate - new Date();
    let timerData = convertMs(timeLeft);
    daysLeft.textContent = addLeadingZero(timerData.days);
    hoursLeft.textContent = addLeadingZero(timerData.hours);
    minutesLeft.textContent = addLeadingZero(timerData.minutes);
    secondsLeft.textContent = addLeadingZero(timerData.seconds);
    if (timeLeft <= 500) {
        clearInterval(interval);
    }
};

function onStartClick() {
    startBtn.setAttribute('disabled', 'disabled');
    interval = setInterval(timer, 1000);
};

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};