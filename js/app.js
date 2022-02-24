var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const getRandomNumber = Math.floor(Math.random() * 3);
    return choices[getRandomNumber];
}

function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    else return "Scissors";
}



function win(user, computer) {
userScore++;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();
result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord}. You win! 💪`;
}


function lose(user, computer){
computerScore++;
computerScore_span.innerHTML = computerScore;
userScore_span.innerHTML = userScore;
const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();
result_p.innerHTML = `${convertToWord(computer)}${smallCompWord} beats ${convertToWord(user)}${smallUserWord}. Computer wins! 🤖`;

}

function tie(user, computer){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} ties with ${convertToWord(computer)}${smallCompWord}. It's a draw! 🤡`;
}

function game(userChoice) {
const computerChoice = getComputerChoice();
switch (userChoice + computerChoice) {
case "rs":
case "pr":
case "sp":
win(userChoice, computerChoice);
break;
case "rp":
case "ps":
case "sr":
lose(userChoice, computerChoice);
break; 
case "rr":
case "pp":
case "ss":
tie(userChoice, computerChoice);
break;
}
} 


main();




function main () {
 rock_div.addEventListener('click', function() {
game("r");
})

 paper_div.addEventListener('click', function() {
game("p");
})

 scissors_div.addEventListener('click', function() {
game("s");
})
}