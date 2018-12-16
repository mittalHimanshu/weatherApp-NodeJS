const https = require('https');
const api = require('./api.json');

function printWeather(weatherInfo){
    if(weatherInfo.message){
        const desc = `${weatherInfo.message}`;
        console.log(desc);
    }
    else{
        const temp = `Current temperature in ${weatherInfo.name} is ${weatherInfo.main.temp} \xB0C`;
        const condition = `Weather condition in ${weatherInfo.name} is ${weatherInfo.weather[0].main}`;
        console.log(temp); console.log(condition);
    }
}

function get(query){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${api.key}`;
    const request = https.get(url, response => {
        let body = "";
        response.on('data', chunk => {
            body += chunk.toString();
        });
        response.on('end', () => {
            const description = JSON.parse(body);
            printWeather(description);
        });
    });
}

module.exports.get = get;