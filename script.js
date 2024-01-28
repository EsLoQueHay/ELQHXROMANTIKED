document.addEventListener('DOMContentLoaded', function () {
    var daysElement = document.getElementById('days');
    var hoursElement = document.getElementById('hours');
    var minutesElement = document.getElementById('minutes');
    var secondsElement = document.getElementById('seconds');
    var messageElement = document.getElementById('message');

    var targetDate = new Date('2024-02-27T16:29:00').getTime();

    function updateCounter() {
        var currentDate = new Date().getTime();
        var timeDifference = targetDate - currentDate;

        if (timeDifference <= 0) {
            clearInterval(counterInterval);
            showFinalMessage();
        } else {
            var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            updateDigit(daysElement, days);
            updateDigit(hoursElement, hours);
            updateDigit(minutesElement, minutes);
            updateDigit(secondsElement, seconds, true);
        }
    }

    function updateDigit(element, value, isSeconds = false) {
        var formattedValue = value.toString().padStart(2, '0');
        element.textContent = isSeconds ? formattedValue : formattedValue;
    }

    function showFinalMessage() {
        hideCounterElements();
        messageElement.style.display = 'block';
    }

    function hideCounterElements() {
        daysElement.style.display = 'none';
        hoursElement.style.display = 'none';
        minutesElement.style.display = 'none';
        secondsElement.style.display = 'none';
    }

    var counterInterval = setInterval(updateCounter, 1000);
});
