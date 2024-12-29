document.getElementById('fetchData').addEventListener('click', async () => {
    const city = document.getElementById('city').value || 'London';
  
    try {
      const weatherResponse = await fetch(`/weather?city=${city}`);
      const weatherData = await weatherResponse.json();
      document.getElementById('temp').innerText = `${weatherData.main.temp} °C`;
      document.getElementById('description').innerText = weatherData.weather[0].description;
      document.getElementById('humidity').innerText = weatherData.main.humidity;
      document.getElementById('wind-speed').innerText = weatherData.wind.speed;
  
      const newsResponse = await fetch(`/news?city=${city}`);
      const newsData = await newsResponse.json();
      const newsList = document.getElementById('news-list');
      newsList.innerHTML = '';
      newsData.articles.forEach(article => {
        const li = document.createElement('li');
        li.innerText = article.title;
        newsList.appendChild(li);
      });
    } catch (error) {
      alert("Произошла ошибка при загрузке данных.");
      console.error(error);
    }
  });
  