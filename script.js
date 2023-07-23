const choices = ['rock', 'paper', 'scissors']
const getComputerChoice = () => {
    const random_choice = Math.floor(Math.random() * choices.length)
    return choices[random_choice]
}

function playRound(playerSelection, computerSelection) {
    const losingMsg = `You Lose! ${computerSelection} beats ${playerSelection}`;
    const winningMsg = `You Win! ${playerSelection} beats ${computerSelection}`;
    const drawMsg = "Draw!";
    const playerSelectionLowercase = `${playerSelection}`.toLowerCase();
    const errorMsg = "Please enter a valid input"
    if (choices.indexOf(playerSelectionLowercase) == -1 ) {
        return errorMsg
    } else if (playerSelectionLowercase == computerSelection) {
        return drawMsg
    } else {
        switch (playerSelectionLowercase) {
            case 'rock':
                if (computerSelection == 'scissors') return winningMsg;
                else return losingMsg;
            case 'paper':
                if (computerSelection == 'rock') return winningMsg;
                else return losingMsg;
            case 'scissors':
                if (computerSelection == 'paper') return winningMsg;
                else return losingMsg;
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Please enter your selection")
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
    }
}

game()
