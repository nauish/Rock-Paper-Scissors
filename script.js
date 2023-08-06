const choices = ["rock", "paper", "scissors"];
const getComputerChoice = () => {
  const random_choice = Math.floor(Math.random() * choices.length);
  return choices[random_choice];
};
const buttons = document.querySelectorAll("button");
const playerScore = 0;
const computerScore = 0;

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    const div = document.getElementById("result");
    const result = document.createTextNode(
      playRound(e.target.id, getComputerChoice())
    );
    if (div.hasChildNodes) {
      div.replaceChildren(result);
    }
    div.appendChild(result);
  })
);

function playRound(playerSelection, computerSelection) {
  const losingMsg = `You Lose! ${computerSelection} beats ${playerSelection}`;
  const winningMsg = `You Win! ${playerSelection} beats ${computerSelection}`;
  const drawMsg = `Draw! Both of you use ${computerSelection}`;
  const playerSelectionLowercase = `${playerSelection}`.toLowerCase();
  const errorMsg = "Please enter a valid input";

  if (choices.indexOf(playerSelectionLowercase) == -1) {
    return errorMsg;
  } else if (playerSelectionLowercase == computerSelection) {
    return drawMsg;
  } else {
    switch (playerSelectionLowercase) {
      case "rock":
        if (computerSelection == "scissors") {
          playerScore += 1;
          return winningMsg;
        } else {
          computerScore += 1;
          return losingMsg;
        }
      case "paper":
        if (computerSelection == "rock") {
          playerScore += 1;
          return winningMsg;
        } else {
          computerScore += 1;
          return losingMsg;
        }
      case "scissors":
        if (computerSelection == "paper") {
          playerScore += 1;
          return winningMsg;
        } else {
          computerScore += 1;
          return losingMsg;
        }
    }
  }
}
