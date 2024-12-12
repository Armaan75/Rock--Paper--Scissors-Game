// * Variables

const options = ["Rock", "Paper", "Scissors"];

let wins = 0;
let losses = 0;
let draws = 0;

// * DOM Elements

const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");
const scoreDisplay = document.getElementById("score");
const buttons = document.querySelectorAll(".options button");
const resetButton = document.getElementById("reset");

// * Generate Computer's Choice

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

// * Determine Outcome

function determineOutcome(userChoice, computerChoice) {
    if (userChoice === computerChoice) return "draw";
    if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        return "win";
    }
    return "lose";
}

// * Update Scoreboard

function updateScore(result) {
    if (result === "win") wins++;
    else if (result === "lose") losses++;
    else draws++;

    scoreDisplay.textContent = `Wins: ${wins} | Losses: ${losses} | Draws: ${draws}`;
}

// * Handle User Choice

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.textContent;
        const computerChoice = getComputerChoice();
        const result = determineOutcome(userChoice, computerChoice);

        userChoiceDisplay.textContent = `User's Choice: ${userChoice}`;
        computerChoiceDisplay.textContent = `Computer's Choice: ${computerChoice}`;
        resultDisplay.textContent = `Result: ${result.charAt(0).toUpperCase() + result.slice(1)}`;
        updateScore(result);
    });
});

// * Reset Game

resetButton.addEventListener("click", () => {
    wins = 0;
    losses = 0;
    draws = 0;
    scoreDisplay.textContent = "Wins: 0 | Losses: 0 | Draws: 0";
    userChoiceDisplay.textContent = "User's Choice:";
    computerChoiceDisplay.textContent = "Computer's Choice:";
    resultDisplay.textContent = "Results:";
});
