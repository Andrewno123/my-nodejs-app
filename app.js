const express = require('express');
const app = express();
const port = 80;

// Middleware для обработки данных формы
app.use(express.urlencoded({ extended: true }));

// Массив с разными приветствиями
const greetings = [
  "Привет",
  "Здравствуйте",
  "Добрый день",
  "Приветствую",
  "Хелло",
  "Салют",
  "Йо",
  "Доброго времени суток"
];

// Функция для получения случайного приветствия
const getRandomGreeting = () => {
  const randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
};

// Маршрут для отображения формы
app.get('/', (req, res) => {
  res.send(`
    <form action="/greet" method="POST">
      <label for="name">Введите ваше имя:</label>
      <input type="text" id="name" name="name">
      <button type="submit">Отправить</button>
    </form>
  `);
});

// Маршрут для обработки данных формы
app.post('/greet', (req, res) => {
  const name = req.body.name;
  const greeting = getRandomGreeting(); // Получаем случайное приветствие
  res.send(`${greeting}, ${name}! Хорошего дня!`);
});

// Запуск сервера
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});