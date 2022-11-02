/*RPS Algorithm*/

//Array for computer to choose from
const choices = [
    "rock",
    "paper",
    "scissors"
];

//Get computer's choice
function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

let computerChoice = getComputerChoice();
console.log("Computer chose " + `${computerChoice}` + "!");

//Get player's choice
let playerChoice = prompt("Choose Rock, Paper, or Scissors").toLocaleLowerCase();
if (playerChoice === "paper" || playerChoice === "scissors" || playerChoice === "rock") {
    console.log("You chose " + `${playerChoice}` + "!");
} else {
    console.log("Error! Try again!");
}

//Declare a winner

//Player chooses rock
function playRound(playerChoice, computerChoice) {
    if (playerChoice === 'rock') {
        if (computerChoice === 'rock') {
            console.log('A draw!');
        } else if (computerChoice === 'paper') {
            console.log('You lose! Paper beats rock!');
        } else if (computerChoice === 'scissors') {
            console.log('You win! Rock beats scissors!');
        }
//Player chooses paper        
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            console.log('You win! Paper beats rock!');
        } else if (computerChoice === 'paper') {
            console.log('A draw!');
        } else if (computerChoice === 'scissors') {
            console.log('You lose! Scissors beats paper!');
        }
//Player chooses scissors        
    } else if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
            console.log('You lose! Rock beats Scissors');
        } else if (computerChoice === 'paper') {
            console.log('You win! Scissors beats paper!');
        } else if (computerChoice === 'scissors') {
            console.log('A draw!');
        }
    }  
}

//Play a round
playRound(playerChoice, computerChoice);