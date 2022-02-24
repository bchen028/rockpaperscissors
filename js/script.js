const choices = ["rock", "paper", "scissors"];
const champion = [];

function game () {
for (let b = 1; b <= 5; b++) {
playRound();
}
return winnersLog();
}

function playRound() {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const theWinner = winnerCheck(playerSelection, computerSelection);
  console.log(computerSelection);
  console.log(theWinner);
  champion.push(theWinner);
}
function playerChoice () {
//input from player
let input = prompt("Would you like the Rock, Paper, or Scissor my friend?");
while (input == null) {
    input = prompt("Would you like the Rock, Paper, or Scissor my friend?");
}
input = input.toLowerCase();
let checkInput = validateInput(input);
while (checkInput == false) {
    input = prompt("Check your spelling! Type Rock, Paper, or Scissor");
    while (input == null) {
        input = prompt("Would you like the Rock, Paper, or Scissor my friend?");
    }
    input = input.toLowerCase();
    checkInput = validateInput(input);
}
return input;
}

   



function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function validateInput(val) {
    if (choices.includes(val)) {
        return true; 
    } else {
        return false;
    }
}

function winnerCheck(p1choice, c1choice){
    if (p1choice === c1choice) {
        return "You tied!";
    } else if (
    (p1choice === "rock" && c1choice == "scissors") ||
    (p1choice === "paper" && c1choice == "rock") ||
    (p1choice === "scissors" && c1choice == "paper")
    ) {
        return "Player Victory!";
    } else {
        return "Computer Victory...";
    }
}

function winnersLog() {

}


