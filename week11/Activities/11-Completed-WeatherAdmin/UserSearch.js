var weather = require('weather-js');
var fs = require('fs');

// UserSearch Constructor
function UserSearch(name, city) {
    var self = this;
    self.name = name;
    self.city = city;
    self.date = Date.now();

    self.getWeather = function() {
        // use the self.city to search for weather
        weather.find({search: self.city, degreeType: 'F'}, function(err, result) {
            if(err) console.log(err);
           
            console.log(JSON.stringify(result, null, 2));
            self.writeToTextFile('log.txt');
          });
    }
    self.writeToTextFile = function(filePath) {
        var toWrite = 'User: ' + self.name + ', Location: ' + self.city + ', Date: ' + self.date + '\n';
        fs.appendFile(filePath, toWrite, function(error) {
            console.log('yay');
            console.log(error);
        });
    }
}

module.exports = UserSearch;