const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice
let computerChoice
let result
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice=e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length+1);
    if (randomNumber === 1) {
        computerChoice = "Rock";
    } else if (randomNumber === 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
    if(computerChoice == userChoice){
        result = "It's a draw!";
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = "You win!";
    } else {
        result = "You lose!";
    }
    resultDisplay.innerHTML = result;
}
