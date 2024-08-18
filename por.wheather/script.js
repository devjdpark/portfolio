document.getElementById('get-weather').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const apiKey = '283f57b4a0b5e32925cf3f7063ce40cb'; // OpenWeatherMap API 키를 여기에 입력하세요
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherInfo = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
                document.getElementById('weather-result').innerHTML = weatherInfo;
            } else {
                document.getElementById('weather-result').innerHTML = `<p>City not found!</p>`;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('weather-result').innerHTML = `<p>Failed to fetch weather data.</p>`;
        });
});
