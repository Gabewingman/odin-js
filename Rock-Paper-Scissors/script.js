let humanScore = 0;
let computerScore = 0;
const scoreToWin = 5;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        return "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return "win";
    } else {
        return "lose";
    }
}

function displayResult(result, humanChoice, computerChoice) {
    const resultDiv = document.getElementById('result');
    const roundResultsDiv = document.getElementById('roundResults');
    
    let roundMessage = '';

    if (result === "tie") {
        roundMessage = "It's a tie!";
    } else if (result === "win") {
        roundMessage = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
    } else {
        roundMessage = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
    }

    // Display current round result
    resultDiv.textContent = roundMessage;

    // Append detailed round result
    const newResult = document.createElement('p');
    newResult.textContent = `Round Result: ${roundMessage}`;
    roundResultsDiv.appendChild(newResult);
}

function updateScore() {
    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `Scores - Human: ${humanScore}, Computer: ${computerScore}`;
}

function checkWinner() {
    const resultDiv = document.getElementById('result');
    if (humanScore >= scoreToWin) {
        resultDiv.textContent = `Congratulations! You win the game with a score of ${humanScore} to ${computerScore}.`;
        disableButtons();
    } else if (computerScore >= scoreToWin) {
        resultDiv.textContent = `Sorry! You lose the game. The computer won with a score of ${computerScore} to ${humanScore}.`;
        disableButtons();
    }
}

function disableButtons() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

function handleClick(event) {
    const humanChoice = event.target.id;
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    if (result === "win") {
        humanScore++;
    } else if (result === "lose") {
        computerScore++;
    }

    displayResult(result, humanChoice, computerChoice);
    updateScore();
    checkWinner();
}

document.getElementById('rock').addEventListener('click', handleClick);
document.getElementById('paper').addEventListener('click', handleClick);
document.getElementById('scissors').addEventListener('click', handleClick);
