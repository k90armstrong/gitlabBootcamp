var bands = require('./bands.js');
console.log(bands);

for (var key in bands) {
    console.log('A ' + key + ' band is ' + bands[key]);
}