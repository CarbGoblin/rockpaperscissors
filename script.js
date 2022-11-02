/*RPS Algorithm*/

//Array for computer to choose from
const choices = [
    "rock",
    "paper",
    "scissors"
];
let win = 'You win!'
let lose = 'You lose!'
let tie = 'A draw!'
let playerScore = parseInt(0);
let computerScore = parseInt(0);

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
            return tie;
        } else if (computerChoice === 'paper') {
            computerScore++;
            return lose + 'Paper beats Rock!';
        } else if (computerChoice === 'scissors') {
            playerScore++;
            return win + 'Rock beats scissors!';
        }
//Player chooses paper        
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            playerScore++;
            return win + 'Paper beats rock';
        } else if (computerChoice === 'paper') {
            return tie;
        } else if (computerChoice === 'scissors') {
            computerScore++;
            return lose + 'Scissors beats paper!';
        }
//Player chooses scissors        
    } else if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
            computerScore++;
            return lose + 'Rock beats scissors!';
        } else if (computerChoice === 'paper') {
            playerScore++;
            return win + 'Scissors beats paper!';
        } else if (computerChoice === 'scissors') {
            return tie;
        }
    }  
}

for(let i=0; i<5; i++) {
    let playerChoice = prompt('Pick a move');
    const computerChoice = getComputerChoice();
    console.log(playRound(playerChoice, computerChoice));
    console.log("Your score = " + playerScore);
    console.log("Computer's score = " + computerScore);
    declareWinner();
}

function declareWinner() {
    if(playerScore > computerScore) {
        console.log("You Win!");
    } else if(playerScore < computerScore) {
        console.log("You Lose!");
    } else if(playerScore == computerScore) {
        console.log("The game is a draw!");
    }
}