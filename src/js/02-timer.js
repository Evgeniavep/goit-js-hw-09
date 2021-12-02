import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector('[data-start]');
startBtn.addEventListener('click', onStartClick);

const daysLeft = document.querySelector('[data-days]');
const hoursLeft = document.querySelector('[data-hours]');
const minutesLeft = document.querySelector('[data-minutes]');
const secondsLeft = document.querySelector('[data-seconds]');


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= this.defaultDate) {
            window.alert("Please choose a date in the future");
            startBtn.setAttribute('disabled', 'disabled');
        };
    },
};

flatpickr('#datetime-picker', options);