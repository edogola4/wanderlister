// Updated async function to fetch weather
async function fetchWeather() {
  const destination = document.getElementById('destinationInput').value;
  const apiKey = '26b2430f405955f492e1f2e45fa3a8e6';  // Hardcoded for testing
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${destination}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === '404') {
      alert('Destination not found, please try again!');
    } else {
      addWeatherItem(data);
    }
  } catch (error) {
    alert('Error fetching weather data');
  }
}

// Function to add the weather information to the list
function addWeatherItem(data) {
  const weatherList = document.getElementById('weatherList');
  weatherList.innerHTML = ''; // Clear any previous entries

  const weatherItem = document.createElement('li');
  weatherItem.classList.add('weather-item');

  const cityName = data.name;
  const temperature = data.main.temp;
  const weatherDescription = data.weather[0].description;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;

  // Dynamically populating weather details
  weatherItem.innerHTML = `
    <h3>${cityName}</h3>
    <p><strong>Temperature:</strong> ${temperature}°C</p>
    <p><strong>Condition:</strong> ${weatherDescription}</p>
    <p><strong>Humidity:</strong> ${humidity}%</p>
    <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
  `;

  weatherList.appendChild(weatherItem);
  document.getElementById('destinationInput').value = ''; // Clear the input field
}

// Attach the fetchWeather function to the form submit event
document.getElementById('weatherForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent the form from submitting
  fetchWeather();
});
