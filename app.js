alert('Welcome to the secret number game!');

let secretNumber = 10;
console.log(secretNumber);
let playerChoice;

while (playerChoice != secretNumber) {
    playerChoice = prompt('Select a number between 1 to 30:');

    if (secretNumber == playerChoice) {
        alert(`Congrats! You guessed the secret number! (` + secretNumber + `)`);
    } else {
        if (playerChoice > secretNumber){
            alert(`The secret number is less than ` + playerChoice);
        } else {
            alert(`The secret number is greater than ` + playerChoice);
        }
    }
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


