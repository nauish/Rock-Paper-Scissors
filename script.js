const choices = ["rock", "paper", "scissors"];
const winConditions = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};
const getComputerChoice = () => {
  const random_choice = Math.floor(Math.random() * choices.length);
  return choices[random_choice];
};
const buttons = document.querySelectorAll("button");
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    const playerScoreDisplay = document.createElement("p");
    const computerScoreDisplay = document.createElement("p");
    const div = document.getElementById("result");
    const p = document.createElement("p");
    const resultText = document.createTextNode(
      playRound(e.target.id, getComputerChoice())
    );

    playerScoreDisplay.textContent = `Player wins ${playerScore} times`;
    computerScoreDisplay.textContent = `Computer wins ${computerScore} times`;

    if (div.hasChildNodes) {
      div.replaceChildren(resultText);
    }

    div.appendChild(resultText);
    div.appendChild(p);
    p.appendChild(playerScoreDisplay);
    p.appendChild(computerScoreDisplay);
  })
);

function playRound(playerSelection, computerSelection) {
  const playerSelectionLowercase = `${playerSelection}`.toLowerCase();

  const playerWins =
    winConditions[playerSelectionLowercase] === computerSelection;

  const errorMsg = "Please enter a valid input";
  if (!choices.includes(playerSelectionLowercase)) {
    return errorMsg;
  }

  const drawMsg = `Draw! Both of you use ${computerSelection}`;
  if (playerSelectionLowercase == computerSelection) {
    return drawMsg;
  }

  if (playerWins) {
    playerScore += 1;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore += 1;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}
