alert('Welcome to the secret number game!');

let secretNumber = parseInt(Math.random() * 100 + 1);
console.log(secretNumber);
let playerChoice;
let attempts = 1;
console.log(secretNumber)

while (playerChoice != secretNumber) {
    playerChoice = prompt('Select a number between 1 to 100:');

    if (secretNumber == playerChoice) {
        break;
    } else {
        if (playerChoice > secretNumber){
            alert(`The secret number is less than ` + playerChoice);
        } else {
            alert(`The secret number is greater than ` + playerChoice);
        }
        attempts++;
    }
}

let wordAttempts = attempts > 1 ? ' attempts!' : ' attempt!';

alert(`Congrats! You guessed the secret number! (` + secretNumber + `) with ` + attempts + wordAttempts);

//if (attemps > 1){
//    alert(`Congrats! You guessed the secret number! (` + secretNumber + `) with ` + attemps + ` attemps`);
//} else {
//    alert(`Congrats! You guessed the secret number! (` + secretNumber + `) with ` + attemps + ` attemp`);
//}


//if (secretNumber == playerChoice) {
//    alert(`Congrats! You guessed the secret number! (` + secretNumber + `)`);
//} else {
//    if (playerChoice > secretNumber){
//        alert(`The secret number is less than ` + playerChoice)
//    } else {
//        alert(`The secret number is greater than ` + playerChoice)
//    }
//}


