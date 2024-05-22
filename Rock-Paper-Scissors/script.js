function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    // Use the prompt method to get the user's input
    let choice = prompt("Please enter your choice (rock, paper, or scissors):");

    // Convert the user's input to lowercase to make the function case-insensitive
    choice = choice.toLowerCase();

    // Validate the user's input
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        // If the input is invalid, return an error message or ask the user again
        console.log("Invalid choice. Please enter rock, paper, or scissors.");
        return getHumanChoice();  // Recursively call the function until a valid choice is made
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        let result;

        if (humanChoice === computerChoice) {
            result = "It's a tie!";
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            result = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
            humanScore++;
        } else {
            result = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
            computerScore++;
        }

        console.log(result);
        console.log(`Scores - Human: ${humanScore}, Computer: ${computerScore}`);
    }

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log(`You win the game! Final score - Human: ${humanScore}, Computer: ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lose the game. Final score - Human: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log(`The game is a tie. Final score - Human: ${humanScore}, Computer: ${computerScore}`);
    }
}

// Call playGame to start the game
playGame();