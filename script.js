const choices = ["rock", "paper", "scissors"]; // 0 - Rock, 1 - Paper, 2 - Scissors
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}

function playRound(playerSelection, computerSelection){
    const results = document.querySelector("div.results");
    let resultText = "";
    if (playerSelection == computerSelection) {
        resultText = "It's a Tie! "
        console.log(`It's a Tie! You chose ${choices[playerSelection]} and computer chose ${choices[computerSelection]}`)
    }
    else if ((playerSelection == 0 && computerSelection == 2) || (playerSelection == 1 && computerSelection == 0) || (playerSelection == 2 && computerSelection == 1)){
        playerScore++;
        resultText = "You Win! "
        console.log(`You Win! You chose ${choices[playerSelection]} and computer chose ${choices[computerSelection]}`)
    }
    else {
        computerScore++;
        resultText = "You Lose! "
        console.log(`You Lose! You chose ${choices[playerSelection]} and computer chose ${choices[computerSelection]}`)
    }
    resultText += `You chose ${choices[playerSelection]} and computer chose ${choices[computerSelection]}!
    Current score is: Player - ${playerScore}, Computer - ${computerScore}`;
    

    if(computerScore == 5 || playerScore == 5){
        if (computerScore == 5)
            resultText += "\nComputer have won the game :("
        else 
            resultText += "\nCongrats! You've won the game!";
        computerScore = 0;
        playerScore = 0;
    }
    results.textContent = resultText;
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonType = button.classList.value;
        playRound(buttonType, getComputerChoice());
    })
})