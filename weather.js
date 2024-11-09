// Function to fetch weather information for the destination
async function fetchWeather() {
    const destination = document.getElementById('destinationInput').value;
    const apiKey = '26b2430f405955f492e1f2e45fa3a8e6';  // Replace with your OpenWeather API key
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
    
    // Clear the existing list before adding new data
    weatherList.innerHTML = '';
  
    const weatherItem = document.createElement('li');
    weatherItem.classList.add('weather-item');
  
    const cityName = data.name;
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
  
    weatherItem.innerHTML = `
      <h3>${cityName}</h3>
      <p><strong>Temperature:</strong> ${temperature}°C</p>
      <p><strong>Condition:</strong> ${weatherDescription}</p>
      <p><strong>Humidity:</strong> ${humidity}%</p>
      <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
    `;
  
    weatherList.appendChild(weatherItem);
  
    // Clear the input field
    document.getElementById('destinationInput').value = '';
  }
  
  // Attach the fetchWeather function to the button click event
  document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission
    fetchWeather();
  });
  