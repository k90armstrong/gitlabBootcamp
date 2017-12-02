function DigitalPet(config) {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.name = config.name;

    // methods
    this.feed = function() {
        if (this.hungry) {
            console.log('That was yummy!');
            this.hungry = false;
            this.sleepy = true;
        }
    }

    this.sleep = function() {
        if (this.sleepy) {
            console.log('ZZZZZZZZZzzz');
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        } else {
            console.log('No! I am not tired!');
        }
    }

    this.increaseAge = function() {
        this.age += 1;
        console.log('Happy birthday to me! I am ' + this.age + ' years old');
    }

    this.play = function() {
        if (this.bored) {
            console.log('Yay lets play!');
            this.bored = false;
        } else {
            console.log('Not right now. Lets play later.');
        }
    }
}

var dog = new DigitalPet({name: 'Barkley'});

dog.outside = true;
dog.bark = function () {
    console.log('WOOOF');
}

dog.bark();