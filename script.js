//let playerSelection;
//let computerSelection;
//let rock = 1;
//let paper = 2;
//let scissors = 3;

//function getComputerChoice() {
//    let choice = Math.random() * 3;
//    if (choice <= 1) {
//        choice = "Rock";
//    } else if (choice <= 2) {
//        choice = "Paper";
//    } else {
//        choice = "Scissors";
//    }
//    return(choice);
//}

//function playRound(playerSelection, computerSelection) {
//    if (playerSelection == rock && computerSelection <= 1 || playerSelection == paper && computerSelection <= 2 || playerSelection == scissors && computerSelection <= 3) {
//        return("Draw! Try again!");
//    } else if (playerSelection > computerSelection) {
//        return("Draw! try again!");
//    } else 
//}

//function playRound(playerSelection, computerSelection) {
//    if (playerSelection === computerSelection) {
//        return("Draw! Try again!");
//    } else if (playerSelection > computerSelection) {
//        return(`You win! ${playerSelection} beats ${computerSelection}.`);
//    } else {
//        return(`You lose! ${computerSelection} beats ${playerSelection}.`);
//    }
//    }