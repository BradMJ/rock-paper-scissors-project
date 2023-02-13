let playerScore = 0;
let compScore = 0;
// 2/13/23 Add ties variable for tieCount
let ties = 0;

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
const boxOfButtons = document.querySelector('#boxOfButtons');
const selectRock = document.getElementById('rockButton');
const selectPaper = document.getElementById('paperButton');
const selectScissors = document.getElementById('scissorsButton');
const rpsButtons = document.getElementsByClassName('btn');
// 2/3/23 Add a div for displaying results and change all of your console.logs into DOM methods
const outcomeDiv = document.getElementById('outcome');
// 2/12/23 Added selectors for boxOfScores div
const yourScore = document.querySelector('#yourScore');
const tieScore = document.querySelector('#tieScore');
const computerScore = document.querySelector('#computerScore');
const yourCount = document.querySelector('#yourCount');
const tieCount = document.querySelector('#tieCount');
const computerCount = document.querySelector('#computerCount');

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
        // 2/13/23 Add ties variable to keep count
        ties++;
        // 2/11/23 Add outcome paragraph
        const p = document.getElementById('results');
        p.innerText = `Tie! You both picked ${playerSelection}.`;
        // 2/13/23 Add DOM tieScore count
        tieCount.innerText = ties;
    } else if (
    (playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')
    ) {
        playerScore++;
        // 2/11/23 Add outcome paragraph
        const p = document.getElementById('results');
        p.innerText = `Player wins! Computer picked ${computerSelection}.`;
        // 2/13/23 Add DOM yourScore count
        yourCount.innerText = playerScore;

    } else {
        compScore++;
        // 2/11/23 Add outcome paragraph
        const p = document.getElementById('results');
        p.innerText = `Computer wins! Computer picked ${computerSelection}.`;
        // 2/13/23 Add DOM computerScore count
        computerCount.innerText = compScore;
    }
    // Add newLogRounds function announcing a winner at 5 points
    newLogRounds();
}

// 2/13/23 Announce a winner of the game once one player reaches 5 points
function newLogRounds() {
    if (playerScore === 5) {
        const p = document.getElementById('results');
        boxOfButtons.innerText = `You beat the computer by reaching a score of ${playerScore} first!`;
        p.innerText = null;
    } else if (compScore === 5) {
        const p = document.getElementById('results');
        boxOfButtons.innerText = `The computer wins by reaching a score of ${compScore} first!`;
        p.innerText = null;
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