const https = require('https');
const api = require('./api.json');

function get(query){
    const request = https.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api.key}`, respone => {
        let body = "";
        request.on('data', chunk => {
            data += chunk;
        });
        request.on('end', () => {
            console.log(data);
        });
    });
}

module.exports.get = get;