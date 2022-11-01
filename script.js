/*RPS Algorithm*/

//Randomly select rock, paper, or scissors
//Prompt user to type rock, paper, or scissor
//Add user selection to a variable
//Compare user selection to computerSelection
//if userSelection === scissor && computerSelection === paper then user wins
//else if user selection === scissor && computerSelection === rock then computer wins
//else if user selection === scissor && computerSelection === scissor then tie
//else if userSelection === rock && computer selection === rock then tie
//else if userSelection === rock && compuerSelection === paper then computer wins
//else if userSelection === rock && computerSelection === scissors then user wins
//else if userSelection === paper && computer selection === rock then user wins
//else if userSelection === paper && compuerSelection === paper then tie
//else if userSelection === paper && computerSelection === scissors then computer wins
const choices = [
    "Rock",
    "Paper",
    "Scissors"
];

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

let computerChoice = getComputerChoice();
console.log(computerChoice);

let playerChoice = prompt("Choose Rock, Paper, or Scissors")
function playRound(playerChoice, computerChoice) {

}