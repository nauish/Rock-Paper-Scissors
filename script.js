const choices = ["rock", "paper", "scissors"];
const getComputerChoice = () => {
  const random_choice = Math.floor(Math.random() * choices.length);
  return choices[random_choice];
};
const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    const div = document.getElementById("result");
    const result = document.createTextNode(
      playRound(e.target.id, getComputerChoice())
    );
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
        if (computerSelection == "scissors") return winningMsg;
        else return losingMsg;
      case "paper":
        if (computerSelection == "rock") return winningMsg;
        else return losingMsg;
      case "scissors":
        if (computerSelection == "paper") return winningMsg;
        else return losingMsg;
    }
  }
}
