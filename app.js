const express = require('express');
const app = express();
const port = 80;

app.use(express.urlencoded({ extended: true }));

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

const getRandomGreeting = () => {
  const randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
};

app.get('/', (req, res) => {
  res.send(`
    <form action="/greet" method="POST">
      <label for="name">Введите ваше имя:</label>
      <input type="text" id="name" name="name">
      <button type="submit">Отправить</button>
    </form>
  `);
});

app.post('/greet', (req, res) => {
  const name = req.body.name;
  const greeting = getRandomGreeting();
  res.send(`${greeting}, ${name}! Хорошего дня!`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
