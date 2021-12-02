const span = document.querySelector('.error');
const submit = document.querySelector('#submit');

async function getWeather(text) {
  try {
    const key = `http://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&APPID=2c7dbd7f96c6c397de8f494d78aef1b4`;
    const response = await fetch(key, { mode: 'cors' });
    const data = await response.json();
    span.style.display = 'none';
    console.log(data);
    setTitle(data.name);
    setDesc(data.weather[0].description);
    setTemp(data.main.temp);
    setFeelsLike(data.main.feels_like);
    setWind(data.wind.speed);
    setHumidity(data.main.humidity);
  } catch (err) {
    span.style.display = 'inline';
    span.textContent = "Couldn't find location"
  }
};

// Search button
submit.addEventListener('click', () => {
  const location = document.querySelector('#location');
  getWeather(location.value);
});

window.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') {
    submit.click();
    e.preventDefault();
  };
});

function setTitle(text) {
  const title = document.querySelector('.title');
  title.textContent = text;
}

function setDesc(text) {
  const desc = document.querySelector('.description');
  desc.textContent = text;
}

function setTemp(text) {
  const temp = document.querySelector('.temperature');
  temp.textContent = Math.round(text * 10) / 10;
}

function setFeelsLike(text) {
  const feelsLike = document.querySelector('.feels-like');
  feelsLike.textContent = `Feels like: ${text} ℃`
}

function setWind(text) {
  const wind = document.querySelector('.wind');
  wind.textContent = `Wind: ${text} meter/sec`;
}

function setHumidity(text) {
  const humidity = document.querySelector('.humidity');
  humidity.textContent = `Humidity: ${text}%`;
}

// Default city
getWeather('kuala lumpur');