function convertTemperature() {
    const temperatureInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;

    if (isNaN(temperatureInput) || temperatureInput === '') {
        alert('Please enter a valid number for temperature.');
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let celsius, fahrenheit, kelvin;

    if (unit === 'celsius') {
        celsius = temperature;
        fahrenheit = (temperature * 9 / 5) + 32;
        kelvin = temperature + 273.15;
    } else if (unit === 'fahrenheit') {
        celsius = (temperature - 32) * 5 / 9;
        fahrenheit = temperature;
        kelvin = celsius + 273.15;
    } else if (unit === 'kelvin') {
        celsius = temperature - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
        kelvin = temperature;
    }

    document.getElementById('result').innerHTML = `
        <p>Celsius: ${celsius.toFixed(2)} °C</p>
        <p>Fahrenheit: ${fahrenheit.toFixed(2)} °F</p>
        <p>Kelvin: ${kelvin.toFixed(2)} K</p>
    `;
}

function changeBackgroundColor() {
    const randomColor = () => Math.floor(Math.random() * 256);
    const rgb = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    document.body.style.backgroundColor = rgb;
}

setInterval(changeBackgroundColor, 1000);