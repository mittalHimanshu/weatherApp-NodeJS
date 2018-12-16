const weather = require('./weather');

const location = process.argv.slice(2);
weather.get(location.join());