// Script to update footer date and windchill factor

document.addEventListener("DOMContentLoaded", () => {
    // Update last modified date
    document.getElementById("lastModified").textContent = document.lastModified;

    // Static values for temperature and wind speed
    const temperature = 30;  // in °C
    const windSpeed = 10;    // in km/h

    // Calculate and display wind chill
    const windChillElement = document.getElementById("windChill");
    windChillElement.textContent = calculateWindChill(temperature, windSpeed);
});

// Function to calculate wind chill based on temperature and wind speed
function calculateWindChill(temp, speed) {
    // Check if wind chill calculation conditions are met
    if (temp <= 10 && speed > 4.8) {
        // Wind chill formula in °C: 13.12 + 0.6215T - 11.37V^0.16 + 0.3965T*V^0.16
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(2) + "°C";
    } else {
        return "N/A";  // Not applicable
    }
}
