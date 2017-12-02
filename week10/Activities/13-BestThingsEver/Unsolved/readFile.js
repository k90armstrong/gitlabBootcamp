var fs = require('fs');
var arguments = process.argv;
// var fileToRead = arguments[2];
fileToRead = 'best_things_ever.txt';
console.log(fileToRead);

fs.readFile(fileToRead, {
    encoding: 'utf-8'
}, function (err, data) {
    if (!err) {
        var array = data.split(',');
        array.forEach(function (item) {
            console.log(item);
        });
    }
    console.log(err);
});