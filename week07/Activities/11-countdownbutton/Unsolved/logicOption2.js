// Initialize Firebase (YOUR OWN APP)
var config = {
  apiKey: "AIzaSyB1WWpmMiDAxCIGBLPfJqD3Y3XkyOozC7o",
  authDomain: "bootcamp-starter.firebaseapp.com",
  databaseURL: "https://bootcamp-starter.firebaseio.com",
  projectId: "bootcamp-starter",
  storageBucket: "bootcamp-starter.appspot.com",
  messagingSenderId: "1081305209534"
};

firebase.initializeApp(config);

// Get a reference to the database service
var db = firebase.database();
// Set Initial Counter
var initialValue = 100;

var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
db.ref().on('value', function (snapshot) {
  var data = snapshot.val();
  console.log(data);
  $('#click-value').text(data.clickCount)
  clickCounter = data.clickCount;
  console.log(clickCounter);

}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// Print the initial data to the console.


// Change the html to reflect the initial value.


// Change the clickCounter to match the data in the database


// Log the value of the clickCounter


// Change the HTML Value


// If any errors are experienced, log them to console.

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function () {

  // Reduce the clickCounter by 1
  clickCounter--;

  // Alert User and reset the counter
  if (clickCounter === 0) {
    alert('YOU HAVE CLICKED 100 TIMES! PLAY AGAIN!');
    clickCounter = 100;
  }

  // Save new value to Firebase
  db.ref().set({
    clickCount: clickCounter
  });

  // Log the value of clickCounter


});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function () {

  // Set the clickCounter back to initialValue
  clickCounter = 100;

  // Save new value to Firebase
  db.ref().set({
    clickCount: clickCounter
  });

  // Log the value of clickCounter


  // Change the HTML Values

});