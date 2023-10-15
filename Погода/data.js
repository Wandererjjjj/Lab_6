export class WeatherData {
  constructor(data) {
    this.data = data;
  }

  get name() {
    return this.data.name;
  }

  get temperature() {
    return this.data.main.temp + '°C';
  }

  get feelsLike() {
    return this.data.main.feels_like + '°C';
  }

  get minTemperature() {
    return this.data.main.temp_min + '°C';
  }

  get maxTemperature() {
    return this.data.main.temp_max + '°C';
  }

  get humidity() {
    return this.data.main.humidity + '%';
  }

  get pressure() {
    return this.data.main.pressure + 'hPa';
  }

  get windSpeed() {
    return this.data.wind.speed + 'м/с';
  }

  get windDirection() {
    return this.data.wind.deg;
  }

  get sunrise() {
    return new Date(this.data.sys.sunrise * 1000).toLocaleTimeString();
  }

  get sunset() {
    return new Date(this.data.sys.sunset * 1000).toLocaleTimeString();
  }

  get weatherCondition() {
    return this.data.weather[0].description;
  }
}