export class Welcome {
  constructor() {
    this.nameInput = document.getElementById('user-name-input');
    this.continueButton = document.getElementById('continueButton');
    this.welcomeContainer = document.getElementById('welcome-container');
    this.weatherContainer = document.getElementById('weather-container');
  }

  init() {
    this.continueButton.addEventListener('click', () => {
      const name = this.nameInput.value;
      if (name) {
        // Если имя введено, скроем приветственное окно и отобразим погодную информацию
        this.welcomeContainer.style.display = 'none';
        this.weatherContainer.style.display = 'block';
        // Отображение имени пользователя
        document.getElementById('user-name').textContent = name;
      } else {
        alert('Пожалуйста, введите ваше имя.');
      }
    });
  }
}