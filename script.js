function setClock() {

    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Calculate angles
    const secondDeg = (seconds / 60) * 360 + 90;

    const minuteDeg =
        ((minutes + seconds / 60) / 60) * 360 + 90;

    const hourDeg =
        ((hours % 12 + minutes / 60) / 12) * 360 + 90;

    // Apply rotation
    document.getElementById("second-hand").style.transform =
        `rotate(${secondDeg}deg)`;

    document.getElementById("minute-hand").style.transform =
        `rotate(${minuteDeg}deg)`;

    document.getElementById("hour-hand").style.transform =
        `rotate(${hourDeg}deg)`;
}

// Run immediately
setClock();

// Update every second
setInterval(setClock, 1000);