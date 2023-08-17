const choices = ["rock", "paper", "scissors"]; // 0 - Rock, 1 - Paper, 2 - Scissors

function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        console.log(`It's a Tie! You chose ${choices[playerSelection]} and computer chose ${choices[computerSelection]}`)
        return 0;
    }
    else if ((playerSelection === 0 && computerSelection === 2) || (playerSelection === 1 && computerSelection === 0) || (playerSelection === 2 && computerSelection === 1)){
        console.log(`You Win! You chose ${choices[playerSelection]} and computer chose ${choices[computerSelection]}`)
        return 1;
    }
    else {
        console.log(`You Lose! You chose ${choices[playerSelection]} and computer chose ${choices[computerSelection]}`)
        return 2;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        let playerText = prompt(`Enter your choice (rock/paper/scissors)`).toLowerCase();
        let playerChoice = choices.indexOf(playerText);
        let result = playRound(playerChoice, getComputerChoice());
        if (result == 1)
            playerScore++;
        else if (result == 2)
            computerScore++;
        console.log(`Current score is: player - ${playerScore}, computer - ${computerScore}`);
    }
    if (playerScore > computerScore)
        console.log("You've won the game!!");
    else if (playerScore == computerScore)
        console.log("You've tied the game.");
    else 
        console.log("You've lost the game...");
}