//Write the logic to get the computer choice

//1.Create a new function named getComputerChoice.
//Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
function getComputerChoice() {
  const array = ["Rock", "Paper", "Scissors"];

  const numberRamdom = Math.floor(Math.random() * 3);
  return array[numberRamdom];
}

//Write the logic to get the human choice
//Create a new function named getHumanChoice.

function getHumanChoice() {
  const reponsePrompt = prompt("Rock  Paper  Scissors");
  return reponsePrompt;
}

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

function playGame() {
  const humanSelection1 = getHumanChoice();
  const computerselection1 = getComputerChoice();
  playRound(humanSelection1, computerselection1);

  const humanSelection2 = getHumanChoice();
  const computerselection2 = getComputerChoice();
  playRound(humanSelection2, computerselection2);

  const humanSelection3 = getHumanChoice();
  const computerselection3 = getComputerChoice();
  playRound(humanSelection3, computerselection3);

  const humanSelection4 = getHumanChoice();
  const computerselection4 = getComputerChoice();
  playRound(humanSelection4, computerselection4);

  const humanSelection5 = getHumanChoice();
  const computerselection5 = getComputerChoice();
  playRound(humanSelection5, computerselection5);

  console.log(
    "Score final : Humain = " + humanScore + ", Ordinateur = " + computerScore
  );
  if (humanScore > computerScore) {
    console.log("🎉 TU AS GAGNÉ !");
  } else if (computerScore > humanScore) {
    console.log("💻 L'ORDINATEUR A GAGNÉ !");
  } else {
    console.log("🤝 ÉGALITÉ PARFAITE !");
  }
}

playGame();
