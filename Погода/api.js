export class API {
    constructor(apiKey) {
      this.apiKey = apiKey;
    }
  
    async fetchWeatherData(city) {
      const trimmedCity = city.trim();
  
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${trimmedCity}&appid=${this.apiKey}&units=metric`
        );
        if (!response.ok) {
          throw new Error('Город не найден');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
        throw new Error('Произошла ошибка при получении данных о погоде.');
      }
    }
  }