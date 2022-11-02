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
    "rock",
    "paper",
    "scissors"
];

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

const computerChoice = getComputerChoice();
console.log("Computer chose " + `${computerChoice}` + "!");

const playerChoice = prompt("Choose Rock, Paper, or Scissors").toLocaleLowerCase();
if (playerChoice === "paper" || playerChoice === "scissors" || playerChoice === "rock") {
    console.log("You chose " + `${playerChoice}` + "!");
} else {
    console.log("Error! Try again!");
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === "rock" && computerChoice === "rock") {
        console.log("Tie!")
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        console.log("Computer Wins!")
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        console.log("Player Wins!")
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        console.log("Player Wins!")
    } else if (playerChoice === "paper" && computerChoice === "paper") {
        console.log("Tie!")
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        console.log("Computer Wins!")
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        console.log("Computer Wins!")
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        console.log("Player Wins!")
    } else if (playerChoice === "scissors" && computerChoice === "scissors") {
        console.log("Tie!")
    }
}

playRound();