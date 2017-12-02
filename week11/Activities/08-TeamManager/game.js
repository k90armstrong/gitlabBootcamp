var inquirer = require('inquirer');

function Player(name, position, offense, defense) {
    var self = this;
    self.name = name;
    self.position = position;
    self.offense = parseInt(offense);
    self.defense = parseInt(defense);

    self.goodGame = function() {
        if (Math.random() > 0.5) {
            // then this is a winning coin flip

        }
    }

    self.badGame = function() {
        if (Math.random() > 0.5) {
            // then this is a winning coin flip
            
        }
    }

    self.printStats = function() {
        console.log('___________________________________');
        console.log(self.name);
        console.log('Position: ' + self.position);
        console.log('Offense: ' + self.offense);
        console.log('Defense: ' + self.defense);
    }
}

var starters = [];
var subs = [];
var count = 0;
var numberOfStarters = 2;
var numberOfSubs = 1;

var askQuestion = function() {
    // if statement to ensure that our questions are only asked five times
    if (count < numberOfStarters) {
      // runs inquirer and asks the user a series of questions whose replies are
      // stored within the variable answers inside of the .then statement
      inquirer.prompt([
        {
          name: "name",
          message: "What is this starters name?"
        }, {
          name: "position",
          message: "What is the players position?"
        }, {
          name: "offense",
          message: "What is the offense level? (number 0-10)"
        }, {
          name: "defense",
          message: "What is the defense level? (number 0-10)"
        }
      ]).then(function(answers) {
        // initializes the variable newguy to be a programmer object which will take
        // in all of the user's answers to the questions above
        var player = new Player(
          answers.name,
          answers.position,
          answers.offense,
          answers.defense);

        starters.push(player);

        // add one to count to increment our recursive loop by one
        count++;
        // run the askquestion function again so as to either end the loop or ask the questions again
        askQuestion();
      });
      // else statement which prints "all questions asked" to the console
      // when the code has been run five times
    }
    else if(count < numberOfStarters+numberOfSubs && count >= numberOfStarters){

        // runs inquirer and asks the user a series of questions whose replies are
      // stored within the variable answers inside of the .then statement
      inquirer.prompt([
        {
          name: "name",
          message: "What is this subs name?"
        }, {
          name: "position",
          message: "What is the players position?"
        }, {
          name: "offense",
          message: "What is the offense level? (number 0-10)"
        }, {
          name: "defense",
          message: "What is the defense level? (number 0-10)"
        }
      ]).then(function(answers) {
        // initializes the variable newguy to be a programmer object which will take
        // in all of the user's answers to the questions above
        var player = new Player(
          answers.name,
          answers.position,
          answers.offense,
          answers.defense);

        subs.push(player);
          

        // add one to count to increment our recursive loop by one
        count++;
        // run the askquestion function again so as to either end the loop or ask the questions again
        askQuestion();
      });
    }
    else {
        console.log('starter length ', starters.length);
        console.log('subs length ', subs.length);
        starters.forEach(function(obj, index, array) {
            obj.printStats();
        })
        subs.forEach(function(obj, index, array) {
            obj.printStats();
        })
    }
  };

  var playGame = function() {
      
  }



  
  // call askquestion to run our code
  askQuestion();
