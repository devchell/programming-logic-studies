alert('Welcome to the secret number game!');

let secretNumber = 10;
console.log(secretNumber);
let playerChoice;
let attemps = 1;

while (playerChoice != secretNumber) {
    playerChoice = prompt('Select a number between 1 to 30:');

    if (secretNumber == playerChoice) {
        break;
    } else {
        if (playerChoice > secretNumber){
            alert(`The secret number is less than ` + playerChoice);
        } else {
            alert(`The secret number is greater than ` + playerChoice);
        }
        attemps++;
    }
}

if (attemps > 1){
    alert(`Congrats! You guessed the secret number! (` + secretNumber + `) with ` + attemps + ` attemps`);
} else {
    alert(`Congrats! You guessed the secret number! (` + secretNumber + `) with ` + attemps + ` attemp`);
}


//if (secretNumber == playerChoice) {
//    alert(`Congrats! You guessed the secret number! (` + secretNumber + `)`);
//} else {
//    if (playerChoice > secretNumber){
//        alert(`The secret number is less than ` + playerChoice)
//    } else {
//        alert(`The secret number is greater than ` + playerChoice)
//    }
//}


