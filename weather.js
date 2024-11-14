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

  // Array of weather details with icons for each label
  const weatherDetails = [
    { label: 'City', value: data.name, icon: '<i class="fas fa-city"></i>' },
    { label: 'Temperature', value: `${data.main.temp}°C`, icon: '<i class="fas fa-thermometer-half"></i>' },
    { label: 'Condition', value: data.weather[0].description, icon: '<i class="fas fa-cloud-sun"></i>' },
    { label: 'Humidity', value: `${data.main.humidity}%`, icon: '<i class="fas fa-tint"></i>' },
    { label: 'Wind Speed', value: `${data.wind.speed} m/s`, icon: '<i class="fas fa-wind"></i>' }
  ];

  // Use forEach to iterate and dynamically create elements with icons
  weatherDetails.forEach(detail => {
    const detailElement = document.createElement('p');
    detailElement.innerHTML = `${detail.icon} <strong>${detail.label}:</strong> ${detail.value}`;
    weatherItem.appendChild(detailElement);
  });

  weatherList.appendChild(weatherItem);
  document.getElementById('destinationInput').value = ''; // Clear the input field
}

// Attach the fetchWeather function to the form submit event
document.getElementById('weatherForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent the form from submitting
  fetchWeather();
});

// An array called weatherDetails contains objects with label and value properties, representing the weather data you want to display.
// We use forEach to iterate over weatherDetails, creating a new paragraph element for each item and appending it to weatherItem.
// 