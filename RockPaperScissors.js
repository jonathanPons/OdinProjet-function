//Write the logic to get the computer choice

//1.Create a new function named getComputerChoice.
//Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
function getComputerChoice() {
  const array = ["Rock", "Paper", "Scissors"];

  const numberRamdom = Math.floor(Math.random() * 3);
  return array[numberRamdom];
}
console.log(getComputerChoice());

//Write the logic to get the human choice
//Create a new function named getHumanChoice.
let reponseUser = "";
console.log("La fonction est appelée");

function getHumanChoice() {
  const reponsePrompt = prompt("Rock  Paper  Scissors");
  return reponsePrompt;
}
const resultat = getHumanChoice();
console.log("Tu as choisi :" + resultat);

//Declare the players score variables

//Create two new variables named humanScore and computerScore in the global scope.

let humanScore = 0;
let computerScore = 0;

//Create a new function named playRound.

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Égalité ! Vous avez tous les deux choisi " + humanChoice);
  } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
    humanScore = humanScore + 1;
    console.log("Tu gagnes, Rock bat Scissors");
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    humanScore = humanScore + 1;
    console.log("Tu gagnes, Paper bat Rock");
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    humanScore = humanScore + 1;
    console.log("Tu gagnes, Scissors bat Paper");
  } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
    computerScore = computerScore + 1;
    console.log("L'ordinateur gagne, Rock bat Scissors");
  } else if (humanChoice === "Rock" && computerChoice === "Paper") {
    computerScore = computerScore + 1;
    console.log("L'ordinateur gagne, Paper bat Rock");
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    computerScore = computerScore + 1;
    console.log("L'ordinateur gagne, Scissors bat Paper");
  }
}
playRound("Rock", "Paper");
console.log(
  "Score avant : Humain = " + humanScore + ", Ordinateur = " + computerScore
);
playRound("Rock", "Paper"); // L'ordinateur devrait gagner
console.log(
  "Score après : Humain = " + humanScore + ", Ordinateur = " + computerScore
);
