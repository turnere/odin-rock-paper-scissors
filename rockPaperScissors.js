function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice() {
    let computerInt = getRandomInt(3);
    console.log(computerInt);
    //Expected output 0, 1, or 2.
    
    let computerChoice;

    if (computerInt === 0) {
        computerChoice = 'rock';
    }
    else if (computerInt === 1) {
        computerChoice = 'paper';
    }
    else {
        computerChoice = 'scissors';
    }

    console.log(computerChoice);
    return computerChoice;
}

function playRound(playerSelection, computerSelction) {
    let result;

    if (playerSelection === computerSelction) {
        result = 'Tie!';
    }
    else if ((playerSelection === 'rock' && computerSelction === 'paper') || (playerSelection === 'paper' && computerSelction === 'scissors') || (playerSelection === 'scissors' && computerSelction === 'rock')){
        result = 'Computer wins!';
    }
    else {
        result = 'You win!';
    }
    return result;
}

const playerSelection = "rock";
const computerSelction = getComputerChoice();

console.log(playRound(playerSelection, computerSelction));

