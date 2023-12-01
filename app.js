alert('Welcome to the secret number game!');

let secretNumber = 10;
console.log(secretNumber)
let playerChoice = prompt('Select a number between 1 to 30:');

if (secretNumber == playerChoice) {
    alert('Congrats! You guessed the secret number! (' + secretNumber + ')');
} else {
    alert('You missed!')
}


