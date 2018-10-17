// create a secret number
var secretNumber = 4;
// ask user for guess
var guess = prompt("guess my secret number");
// check if guess is right
if (Number(guess) === secretNumber) {
  alert("you got it right!");
}
// otherwise check if higher
else if (Number(guess) > secretNumber) {
  alert("too high. guess again");
} else {
  alert("too low. guess again");
}
