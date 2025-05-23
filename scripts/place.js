// Current Year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Last Modified
const lastModified = document.lastModified;
document.getElementById("lastmodification").textContent = lastModified;

// Wind Chill function
function calculateWindChill(temp, windSpeed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temp * Math.pow(windSpeed, 0.16));
}

const tempElement = document.getElementById("temperature");
const windSpeedElement = document.getElementById("windSpeed");
const windChillElement = document.getElementById("windChill");

// Set static values (defined in JavaScript, not HTML)
const temperature = 10; // 10°C
const windSpeed = 5; // 4.8 km/h

// Print temperature and wind speed
tempElement.textContent = temperature;
windSpeedElement.textContent = windSpeed;

// Calculate and print wind chill with if statements
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = windChill.toFixed(1) + "°C";
} else {
    windChillElement.textContent = "N/A";
}
