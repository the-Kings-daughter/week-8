// Develop a program that generates a random number between 1 and 100. Allow the user to guess the number and provide feedback on whether the guess is too high, too low, or correct.


function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
  
  function check(userGuess, randomNumber) {
    if (userGuess === randomNumber) {
      return "correct";
    } else if (userGuess > randomNumber) {
      return "too high";
    } else {
      return "too low";
    }
  }
const secretNumber = generateRandomNumber();
const userGuess = 10;
const result = check(userGuess, secretNumber);
console.log(`Guess: ${userGuess}, Result: ${result}`);
console.log ('The secret number is', secretNumber);