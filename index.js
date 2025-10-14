function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;

    const options = {weekday: 'short', year: '2-digit', month: 'short', day: '2-digit'};
    const currentDate = now.toLocaleDateString(undefined, options);
    document.getElementById("date").textContent = currentDate;
}

setInterval(updateClock, 1000);

updateClock();