document.getElementById('startButton').addEventListener('click', function() {
    const eventName = document.getElementById('eventName').value;
    const eventDate = new Date(document.getElementById('eventDate').value);

    // checks for the valid event name and date
    if (!eventName || isNaN(eventDate.getTime())) {
        alert("Please enter a valid event name and date.");
        return;
    }

    const countdownList = document.getElementById('countdownList');

    // create a new countdown element
    const countdownDiv = document.createElement('div');
    countdownDiv.classList.add('countdown');
    countdownDiv.innerHTML = `${eventName}: <span id="timer-${Date.now()}"></span>`;
    countdownList.appendChild(countdownDiv);

    // store the timer ID
    const timerId = Date.now();

    // updates  countdown every second
    const countdownInterval = setInterval(function() {
        const now = new Date();
        const timeRemaining = eventDate - now;

        // calculates days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // updates the timer display
        document.getElementById(`timer-${timerId}`).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // if the countdown is finished itll display a message
        if (timeRemaining < 0) {
            clearInterval(countdownInterval);
            countdownDiv.innerHTML = `${eventName}: Event has started!`;
        }
    }, 1000);
});
