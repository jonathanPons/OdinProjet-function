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
function getHumanChoice(params) {
  const choix = prompt("Quel est ton prénom ?");
  console.log(choix); // Pour voir ce que l'utilisateur a tapé
  return choix;
}

//Declare the players score variables

//Create two new variables named humanScore and computerScore in the global scope.

let humanScore = 0;
let computerScore = 0;

//Create a new function named playRound.

function playRound(humanChoice, computerChoice) {}
