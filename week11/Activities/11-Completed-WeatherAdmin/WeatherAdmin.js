var UserSearch = require('./UserSearch');
var fs = require('fs');

function WeatherAdmin(userName, city){
    var self = this;
    self.name = userName;
    self.city = city;
    self.getData = function() {
        fs.readFile('log.txt',  "utf8", function(error, data) {
            console.log(data);
        });
    }

    // when it gets created lets check to see what type of user it is
    if (self.name === 'admin') {
        self.getData();
    } else {
        var user = new UserSearch(self.name, self.city);
        user.getWeather();
    }
}

module.exports = WeatherAdmin;