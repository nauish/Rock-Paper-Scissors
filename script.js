const choices = ["rock", "paper", "scissors"];
const logic = {
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
    const winMsg = document.createElement("p");
    const div = document.getElementById("result");
    const resultText = document.createTextNode(
      playRound(e.target.id, getComputerChoice())
    );

    playerScoreDisplay.textContent = `Player wins ${playerScore} times`;
    computerScoreDisplay.textContent = `Computer wins ${computerScore} times`;
    if (div.hasChildNodes) {
      div.replaceChildren(resultText);
    }

    div.appendChild(resultText);
    div.appendChild(playerScoreDisplay);
    div.appendChild(computerScoreDisplay);
    if (playerScore >= 5) {
      winMsg.textContent = "You won!";
      div.appendChild(winMsg);
    } else if (computerScore >= 5) {
      winMsg.textContent = "Computer wins!";
      div.appendChild(winMsg);
    }
  })
);

function playRound(playerSelection, computerSelection) {
  const playerSelectionLowercase = `${playerSelection}`.toLowerCase();

  const playerWins = logic[playerSelectionLowercase] === computerSelection;

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
    return `You win this round since ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore += 1;
    return `Computer wins this round since ${computerSelection} beats ${playerSelection}`;
  }
}
