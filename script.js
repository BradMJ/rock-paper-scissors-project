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
const selectRock = document.getElementById('rockButton');
const selectPaper = document.getElementById('paperButton');
const selectScissors = document.getElementById('scissorsButton');
const rpsButtons = document.getElementsByClassName('btn');
// 2/3/23 Add a div for displaying results and change all of your console.logs into DOM methods
const outcomeDiv = document.getElementById('outcome');

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

// 2/3/23 second step, add event listeners to the three buttons that call playRound with
// the correct playerSelection every time a button is clicked (keep console.log for this step)
selectRock.addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    checkWinner(playerSelection, computerSelection);
});

selectPaper.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    checkWinner(playerSelection, computerSelection);
});

selectScissors.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    checkWinner(playerSelection, computerSelection);
});

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        // 2/11/23 Add outcome paragraph
        const p = document.getElementById('results');
        p.innerText = `Tie! You both picked ${playerSelection}.`;

    } else if (
    (playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')
    ) {
        playerScore++;
        // 2/11/23 Add outcome paragraph
        const p = document.getElementById('results');
        p.innerText = `Player wins! Computer picked ${computerSelection}.`;

    } else {
        compScore++;
        // 2/11/23 Add outcome paragraph
        const p = document.getElementById('results');
        p.innerText = `Computer wins! Computer picked ${computerSelection}.`;
    }
}

//function logRounds() {
//    if (playerScore > compScore) {
//        console.log("You beat the computer in a best of 5!");
//    } else if (playerScore < compScore) {
//        console.log("The computer beat you in a best of 5!");
//    } else {
//        console.log("You tied with the computer in a best of 5!");
//    }
//}