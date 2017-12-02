var WeatherAdmin = require('./WeatherAdmin');

// get inputs
var inputs = process.argv;
var user = inputs[2];
var city = inputs[3];

// user weather admin and let it do its thing!
var weatherAdmin = new WeatherAdmin(user, city);