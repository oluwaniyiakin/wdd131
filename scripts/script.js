document.addEventListener('DOMContentLoaded', () => {
    const lastModifiedElement = document.getElementById('lastModified');
    lastModifiedElement.textContent = document.lastModified;

    const temperature = 30; // Static temperature value in Celsius
    const windSpeed = 10; // Static wind speed value in km/h

    const windChillElement = document.getElementById('windChill');
    const windChillValue = calculateWindChill(temperature, windSpeed);

    windChillElement.textContent = windChillValue;

    function calculateWindChill(temp, speed) {
        if (temp <= 10 && speed > 4.8) {
            const windChill = (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
            return `${windChill} °C`;
        }
        return "N/A";
    }
});
