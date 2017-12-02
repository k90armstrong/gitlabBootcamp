// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
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
var database = firebase.database();


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function (snapshot) {
  console.log('hejeklej');

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    // highPrice = ...
    // highBidder = ...
    var data = snapshot.val();
    highPrice = data.highPrice;
    highBidder = data.highBidder;

    // Change the HTML to reflect the stored values
    $('#highest-bidder').text(highBidder);
    $('#highest-price').text(highPrice);

    // Print the data to the console.
    console.log(highBidder, highPrice);

  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    // Change the HTML to reflect the initial values
    $('#highest-bidder').text(highBidder);
    $('#highest-price').text(highPrice);

    // Print the data to the console.
    console.log(highBidder, highPrice);


  }


  // If any errors are experienced, log them to console.
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function (event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  var name = $('#bidder-name').val().trim();
  var bidderPrice = parseInt($('#bidder-price').val().trim());

  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
    console.log(name);
    database.ref().set({
      highBidder: name
    }, function (err) {
      console.log(err);
    });
    database.ref().set({
      highPrice: bidderPrice
    }, function (err) {
      console.log(err);
    });

    // Log the new High Price


    // Store the new high price and bidder name as a local variable


    // Change the HTML to reflect the new high price and bidder

  } else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});