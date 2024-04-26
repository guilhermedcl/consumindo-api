const fetch = require('node-fetch');

const newsApiKey = '';
const openWeatherApiKey = '';
// função para buscar notícias com base na cidade
async function fetchNews(city) {
    try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${city}&apiKey=${newsApiKey}`);
        if (response.ok) {
            const data = await response.json();
            return data.articles;
        } else {
            throw new Error('Houve um erro ao buscar as notícias:', response.statusText);
        }
    } catch (error) {
        console.error('Não foi possível buscar as notícias:', error.message);
    }
}
// função para buscar dados meteorológicos com base na cidade
async function fetchWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherApiKey}&units=metric`);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Houve um erro ao buscar os dados meteorológicos:', response.statusText);
        }
    } catch (error) {
        console.error('Não foi possível buscar os dados meteorológicos:', error.message);
    }
}
// função para exibir dados meteorológicos no console
function displayWeather(data) {
    console.log('-'.repeat(40));
    console.log('DADOS METEOROLÓGICOS PARA', data.name);
    console.log('-'.repeat(40));
    console.log('Temperatura:', data.main.temp + '°C');
    console.log('Condição:', data.weather[0].description);
    console.log('Umidade:', data.main.humidity + '%');
    console.log('Velocidade do Vento:', data.wind.speed + ' m/s');
}

// cidade que será buscada as informaçês 
const city = 'Florianópolis';

fetchNews(city)
    .then(articles => {
        console.log('-'.repeat(40));
        console.log('NOTÍCIAS PARA', city + ':');
        console.log('-'.repeat(40));
        articles.slice(0, 5).forEach((article, index) => {
            console.log(`Notícia ${index + 1}:`);
            console.log('Título:', article.title);
            console.log('Descrição:', article.description);
            console.log('Fonte:', article.source.name);
            console.log('URL:', article.url);
            console.log('='.repeat(40));
        });
    })
    .catch(error => {
        console.error('Não foi possível buscar as notícias:', error.message);
    });

fetchWeather(city)
    .then(data => {
        displayWeather(data);
    })
    .catch(error => {
        console.error('Não foi possível buscar os dados meteorológicos:', error.message);
    });
