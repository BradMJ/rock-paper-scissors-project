//function getComputerChoice() {
//    return( "Rock" || "Paper" || "Scissors" ) ;
//}

let playerSelection;
let computerSelection;

function getComputerChoice() {
    let choice = Math.random() * 3;
    if (choice <= 1) {
        choice = "Rock";
    } else if (choice <= 2) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    return(choice);
}

function playRound(playerSelection, computerSelection) {

}