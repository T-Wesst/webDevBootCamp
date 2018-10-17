// create a secret number
var secretNumber = 4;
// ask user for guess
var stringGuess = prompt("guess my secret number");
var guess = Number(stringGuess);
// check if guess is right
if (guess === secretNumber) {
  alert("you got it right!");
}
// otherwise check if higher
else if (guess > secretNumber) {
  alert("too high. guess again");
} else {
  alert("too low. guess again");
}
