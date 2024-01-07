//To create the computer selection.
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

//Uses the random to get a computer selection from 0 - 2.
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

//Compares player selection to computer selection and returns who won or tie.
function playRound(playerSelection, computerSelction) {
    let result;

    if (playerSelection === computerSelction) {
        result = 'tie';
    }
    else if ((playerSelection === 'rock' && computerSelction === 'paper') || (playerSelection === 'paper' && computerSelction === 'scissors') || (playerSelection === 'scissors' && computerSelction === 'rock')){
        result = 'computer';
    }
    else {
        result = 'player';
    }
    return result;
}

//Compares round result and totals everything for 5 rounds.
function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let round = 1; round < 6; round++) {
        //Runs 5 times.
        console.log(`Round ${round}`);

        let playerSelection = prompt("rock, paper, scissors?");
        const computerSelction = getComputerChoice();

        let roundResult = playRound(playerSelection, computerSelction);
        console.log(roundResult);

        if (roundResult === 'tie') {
            console.log("It's a tie! Replay!");
            round--;
        }
        else if (roundResult === 'computer') {
            computerScore++;
            console.log("The computer wins!");
            console.log(`Computer: ${computerScore} You: ${playerScore}`);
        }
        else {
            playerScore++;
            console.log("You won!");
            console.log(`Computer: ${computerScore} You: ${playerScore}`);
        }
    }
}

game();