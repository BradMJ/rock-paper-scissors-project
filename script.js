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


let playerScore = 0;
let compScore = 0;

let choices = ['rock', 'paper', 'scissors'];

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    logRounds();
}

function playRound() {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    checkWinner(playerSelection, computerSelection);
}

function getPlayerChoice() {
    let input = prompt("Type rock, paper, or scissors.");
    while (input == null) {
        input = prompt("Type rock, paper, or scissors.");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt("Type rock, paper, or scissors. Nees correct spelling but not capitalization.");
        while (input == null) {
            input = prompt("Type rock, paper, or scissors.");
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
    return choices.includes(choice);
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log(`Tie! You both picked ${playerSelection}.`);
    } else if (
    (playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')
    ) {
        playerScore++;
        console.log("Player wins!");
    } else {
        compScore++;
        console.log("Computer wins!");
    }
}

function logRounds() {
    if (playerScore > compScore) {
        console.log("You beat the computer in a best of 5!");
    } else if (playerScore < compScore) {
        console.log("The computer beat you in a best of 5!");
    } else {
        console.log("You tied with the computer in a best of 5!");
    }
}