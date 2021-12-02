const submit = document.querySelector('#submit');
const h1 = document.querySelector('h1');

async function getWeather(text) {
  try {
    const key = `http://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&APPID=2c7dbd7f96c6c397de8f494d78aef1b4`;
    const response = await fetch(key, { mode: 'cors' });
    const data = await response.json();
    console.log({ temperature: data.main.temp });
    h1.textContent = `${text}\'s temperature is ${data.main.temp} degrees celsius`;
  } catch (err) {
    h1.textContent = 'Data not available';
  }
};

submit.addEventListener('click', () => {
  const location = document.querySelector('#location');
  getWeather(location.value);
});
