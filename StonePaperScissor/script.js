const moves = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

const computerPlay = () => moves[Math.floor(Math.random() * moves.length)];

const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    const playerIndex = moves.indexOf(playerSelection);
    const computerIndex = moves.indexOf(computerSelection);

    if (playerIndex === computerIndex) {
        return "Tie";
    } else if (
        (playerIndex === 0 && computerIndex === 2) ||
        (playerIndex === 1 && computerIndex === 0) ||
        (playerIndex === 2 && computerIndex === 1)
    ) {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
};

const updateResult = (message) => {
    const resultElement = document.querySelector(".result");
    resultElement.textContent = message;
};

const updateScores = () => {
    console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
};

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerSelection = button.textContent;
        const computerSelection = computerPlay();
        const message = playRound(playerSelection, computerSelection);
        updateResult(message);
        updateScores();
    });
});
