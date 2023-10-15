import { API } from './api.js';
import { WeatherData } from './data.js';
import { WeatherDisplay } from './weatherDisplay.js';
import { Welcome } from './welcome.js';

const apiKey = "8b25797358a7098af184182e9409c379";
const api = new API(apiKey);
const weatherDisplay = new WeatherDisplay();
const welcome = new Welcome();

document.addEventListener("DOMContentLoaded", function () {
  async function fetchAndDisplayWeather(city) {
    try {
      const data = await api.fetchWeatherData(city);
      const weatherData = new WeatherData(data);
      weatherDisplay.displayWeatherData(weatherData);
    } catch (error) {
      console.error(error);
      alert('Произошла ошибка при получении данных о погоде.');
    }
  }

  const searchButton = document.getElementById('searchButton');
  const inputCity = document.getElementById('cityInput');

  searchButton.addEventListener('click', () => {
    const cityInputValue = inputCity.value;
    fetchAndDisplayWeather(cityInputValue);
  });

  // Обработка изменений в состоянии чекбоксов
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      // Перерисовываем информацию о погоде при изменении состояния чекбоксов
      const cityInputValue = inputCity.value;
      fetchAndDisplayWeather(cityInputValue);
    });
  });

  const chartContainer = document.getElementById('chart-container');
  const weatherChart = document.getElementById('weather-chart');

  // Функция для построения диаграммы для влажности и давления
  function plotHumidityPressureChart(humidity, pressure, windDirection) {
    const humidityPressureChartCanvas = document.getElementById('humidity-pressure-chart');
    new Chart(humidityPressureChartCanvas, {
      type: 'bar',
      data: {
        labels: ['Влажность', 'Давление', 'Направление ветра'],
        datasets: [{
          label: 'Значения',
          data: [humidity, pressure, windDirection],
          backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(75, 192, 192, 0.2)'],
          borderColor: ['rgba(75, 192, 192, 1)', 'rgba(75, 192, 192, 1)', 'rgba(75, 192, 192, 1)'],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  // Функция для построения диаграммы для остальных параметров
  function plotOtherParametersChart(data) {
    // Удаляем ненужные параметры из данных
    delete data['Восход солнца'];
    delete data['Закат солнца'];
    delete data['Состояние погоды'];

    const labels = Object.keys(data);
    const values = Object.values(data);

    const otherParametersChartCanvas = document.getElementById('other-parameters-chart');
    new Chart(otherParametersChartCanvas, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Значения',
          data: values,
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  // Обработчик кнопки "Построить графики"
  const plotChartButton = document.getElementById('plotChartButton');
  plotChartButton.addEventListener('click', () => {
    const cityName = inputCity.value.trim(); // Получаем значение из поля "Введите название города"
    if (!cityName) {
      alert('Пожалуйста, введите название города.');
      return; // Если поле пустое, не выполняем дальнейший код
    }

    const humidity = parseFloat(document.getElementById('humidity').textContent);
    const pressure = parseFloat(document.getElementById('pressure').textContent);
    const windDirection = parseFloat(document.getElementById('wind-direction').textContent);

    const weatherData = {
      'Температура': parseFloat(document.getElementById('temperature').textContent),
      'Ощущается как': parseFloat(document.getElementById('feels-like').textContent),
      'Минимальная температура': parseFloat(document.getElementById('min-temperature').textContent),
      'Максимальная температура': parseFloat(document.getElementById('max-temperature').textContent),
      'Скорость ветра': parseFloat(document.getElementById('wind-speed').textContent),
      'Восход солнца': Date.parse(document.getElementById('sunrise').textContent),
      'Закат солнца': Date.parse(document.getElementById('sunset').textContent),
      'Состояние погоды': 1 // Просто для демонстрации, вы можете заменить на актуальные данные
    };

    // Отобразить диаграммы
    plotHumidityPressureChart(humidity, pressure, windDirection);
    plotOtherParametersChart(weatherData);

    // Показать контейнеры диаграмм
    document.getElementById('humidity-pressure-chart-container').style.display = 'block';
    document.getElementById('other-parameters-chart-container').style.display = 'block';
  });

  // Инициализация приветствия
  welcome.init();
});