function Character (config) {
    this.name = config.name;
    this.profession = config.profession;
    this.gender = config.gender;
    this.age = config.age;
    this.strength = config.strength;
    this.hitPoints = config.hitPoints;
    this.printStatus = function() {
        console.log('Name: ' + this.name);
        console.log('Profession: ' + this.profession);
        console.log('Gender: ' + this.gender);
        console.log('Age: ' + this.age);
        console.log('Strength: ' + this.strength);
        console.log('Hit Points: ' + this.hitPoints);        
    }
}

var config1 = {
    name: 'Bob',
    profession: 'Reads',
    gender: 'Male',
    age: 20,
    strength: 90,
    hitPoints: 30
}

var config2 = {
    name: 'Sam',
    profession: 'Writes',
    gender: 'Male',
    age: 46,
    strength: 190,
    hitPoints: 10
}

var bob = new Character(config1);
var sam = new Character(config2);
bob.printStatus();
sam.printStatus();
