export class WeatherDisplay {
  constructor() {
    this.elements = {
      cityName: document.getElementById('city-name'),
      temperature: document.getElementById('temperature'),
      feelsLike: document.getElementById('feels-like'),
      minTemperature: document.getElementById('min-temperature'),
      maxTemperature: document.getElementById('max-temperature'),
      humidity: document.getElementById('humidity'),
      pressure: document.getElementById('pressure'),
      windSpeed: document.getElementById('wind-speed'),
      windDirection: document.getElementById('wind-direction'),
      sunrise: document.getElementById('sunrise'),
      sunset: document.getElementById('sunset'),
      weatherCondition: document.getElementById('weather-condition'),
    };

    this.checkboxes = {
      temperature: document.getElementById('hide-temperature'),
      feelsLike: document.getElementById('hide-feels-like'),
      minTemperature: document.getElementById('hide-min-temperature'),
      maxTemperature: document.getElementById('hide-max-temperature'),
      humidity: document.getElementById('hide-humidity'),
      pressure: document.getElementById('hide-pressure'),
      windSpeed: document.getElementById('hide-wind-speed'),
      windDirection: document.getElementById('hide-wind-direction'),
      sunrise: document.getElementById('hide-sunrise'),
      sunset: document.getElementById('hide-sunset'),
      weatherCondition: document.getElementById('hide-weather-condition'),
    };
  }

  displayWeatherData(data) {
    const {
      cityName,
      temperature,
      feelsLike,
      minTemperature,
      maxTemperature,
      humidity,
      pressure,
      windSpeed,
      windDirection,
      sunrise,
      sunset,
      weatherCondition,
    } = this.elements;

    // Показываем или скрываем параметры города в зависимости от состояния чекбоксов
    cityName.style.display = 'block';
    temperature.style.display = !this.checkboxes.temperature.checked ? 'block' : 'none';
    feelsLike.style.display = !this.checkboxes.feelsLike.checked ? 'block' : 'none';
    minTemperature.style.display = !this.checkboxes.minTemperature.checked ? 'block' : 'none';
    maxTemperature.style.display = !this.checkboxes.maxTemperature.checked ? 'block' : 'none';
    humidity.style.display = !this.checkboxes.humidity.checked ? 'block' : 'none';
    pressure.style.display = !this.checkboxes.pressure.checked ? 'block' : 'none';
    windSpeed.style.display = !this.checkboxes.windSpeed.checked ? 'block' : 'none';
    windDirection.style.display = !this.checkboxes.windDirection.checked ? 'block' : 'none';
    sunrise.style.display = !this.checkboxes.sunrise.checked ? 'block' : 'none';
    sunset.style.display = !this.checkboxes.sunset.checked ? 'block' : 'none';
    weatherCondition.style.display = !this.checkboxes.weatherCondition.checked ? 'block' : 'none';

    // Установка текстового содержимого
    cityName.textContent = data.name;
    temperature.textContent = data.temperature;
    feelsLike.textContent = data.feelsLike;
    minTemperature.textContent = data.minTemperature;
    maxTemperature.textContent = data.maxTemperature;
    humidity.textContent = data.humidity;
    pressure.textContent = data.pressure;
    windSpeed.textContent = data.windSpeed;
    windDirection.textContent = data.windDirection;
    sunrise.textContent = data.sunrise;
    sunset.textContent = data.sunset;
    weatherCondition.textContent = data.weatherCondition;
  }
}