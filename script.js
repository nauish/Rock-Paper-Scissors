const choices = ['rock', 'paper', 'scissors']
const getComputerChoice = () => {
    const random_choice = Math.floor(Math.random() * choices.length)
    return choices[random_choice]
}

function playRound(playerSelection, computerSelection) {
    const losingMsg = "You Lose!";
    const winningMsg = "You Win!";
    const drawMsg = "Draw!";
    if (playerSelection = computerSelection) {
        return drawMsg
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));