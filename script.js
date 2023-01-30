let playerScore = 0;
let compScore = 0;

let choices = ['rock', 'paper', 'scissors'];

// 1/30/23 first step, remove the logic that plays exactly 5 rounds
// function game() {
//    for (let i = 0; i < 5; i++) {
//        playRound();
//    }
//    logRounds();
//}
// 1/30/23 second step, add event listeners to the three buttons that call playRound with
// the correct playerSelection every time a button is clicked (keep console.log for this step)
let selectRock = document.getElementById('rockButton');

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