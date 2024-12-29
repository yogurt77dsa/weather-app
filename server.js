const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/weather', async (req, res) => {
  const city = req.query.city || 'London'; 
  const apiKeyWeather = 'e068a4d5fbfddd99dc00f0b5494dc4f2'; 
  try {
    const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeyWeather}&units=metric`);
    res.json(weatherResponse.data);
  } catch {
    res.status(500).send('Ошибка при получении данных о погоде');
  }
});

app.get('/news', async (req, res) => {
  const city = req.query.city || 'London'; 
  const apiKeyNews = '22f296830c2846b3916a2999a89bf464';
  try {
    const newsResponse = await axios.get(`https://newsapi.org/v2/everything?q=${city}&apiKey=${apiKeyNews}`);
    res.json(newsResponse.data);
  } catch {
    res.status(500).send('Ошибка при получении данных о новостях');
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
