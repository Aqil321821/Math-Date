//Q1.Round and other methods
/*
var userInput = prompt("Enter a positive integer:");


var number = parseInt(userInput);


if (!isNaN(number) && number > 0) {

  var roundedValue = Math.round(number);
  var floorValue = Math.floor(number);
  var ceilValue = Math.ceil(number);

  
  document.write("Number: " + number + "<br>");
  document.write("Rounded Value: " + roundedValue + "<br>");
  document.write("Floor Value: " + floorValue + "<br>");
  document.write("Ceil Value: " + ceilValue + "<br>");
} else {
  document.write("Invalid input. Please enter a positive integer.");
}
*/

//short
/*
Math.round(4.7) // 5
Math.floor(4.7) // 4
Math.ceil(4.7) // 5
*/
           ///////////////////////////////////////////////////

//Q2.Take -ve number and perform math operatios on it
/*
var userInput = prompt("Enter a negative floating-point number:");


var number = parseFloat(userInput);


if (!isNaN(number) && number < 0) {

  var roundedValue = Math.round(number);
  var floorValue = Math.floor(number);
  var ceilValue = Math.ceil(number);


  document.write("Number: " + number + "<br>");
  document.write("Rounded Value: " + roundedValue + "<br>");
  document.write("Floor Value: " + floorValue + "<br>");
  document.write("Ceil Value: " + ceilValue + "<br>");
} else {
  document.write("Invalid input. Please enter a negative floating-point number.");
}
*/

             ///////////////////////////////////
//Q3.Write a program that displays the absolute value of a
  //number.E.g. absolute value of -4 is 4 & absolute value of 5 is 5.  

/* 
var userInput = prompt("Enter a number:");


var number = parseFloat(userInput);


if (!isNaN(number)) {

  var absoluteValue = Math.abs(number);

  document.write("Absolute value of " + number + " is " + absoluteValue);
} else {
  document.write("Invalid input. Please enter a number.");
}
*/
           ////////////////////////////////////////

//Q4.Write a program that simulates a dice using random()
/*
var diceValue = Math.floor(Math.random() * 6) + 1;


document.write("Dice Value: " + diceValue);
 */
            ///////////////////////////////////////
//Q5.Write a program that simulates a coin toss using random()
 /*
var coinToss = Math.random();

var coinResult;


if (coinToss < 0.5) {
  coinResult = "Heads";
} else {
  coinResult = "Tails";
}

document.write("Coin Toss Result: " + coinResult);
           */

             ////////////////////////////

 //Q6.6. Write a program that shows a random number between 1 & 100
// Generate a random number between 1 and 100
/*
var randomNumber = Math.floor(Math.random() * 100) + 1;


document.write("Random Number between 1 and 100: " + randomNumber);
         */

//Q7.parsing values
//Write a program that asks the user about his weight. Parse the user input
/*
var userInput = prompt("Please enter your weight (in kilograms):");

// Parse the user input as a floating-point number
var weight = parseFloat(userInput);

// Check if the input is a valid number
if (!isNaN(weight)) {
 
  document.write("Your weight is: " + weight + " kilograms");
} else {
  document.write("Invalid input. Please enter a valid weight in kilograms.");
}
*/
          //////////////////////////////////////////

//Q8.guess number game
/*
// Generate a random secret number between 1 and 10
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to input a number
var userInput = prompt("Guess the secret number (between 1 and 10):");

// Parse the user input as an integer
var userGuess = parseInt(userInput);

// Check if the input is a valid number between 1 and 10
if (!isNaN(userGuess) && userGuess >= 1 && userGuess <= 10) {
  // Check if the user's guess equals the secret number
  if (userGuess === secretNumber) {
    document.write("Congratulations! You guessed the secret number!");
  } else {
    document.write("Sorry, your guess is not correct. The secret number was " + secretNumber + ".");
  }
} else {
  document.write("Invalid input. Please enter a number between 1 and 10.");
}
*/