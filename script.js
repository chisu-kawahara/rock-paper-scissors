const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const resetBtn = document.getElementById('resetBtn');

const playerScoreEl = document.getElementById('playerScore');
const computerScoreEl = document.getElementById('computerScore');
const resultsEl = document.getElementById('results');

let humanScore = 0;
let computerScore = 0;
const WINNING_SCORE = 5;

// Computer randomly picks rock/paper/scissors
const getComputerChoice = () => {
  const r = Math.random();
  if (r < 0.33) return "rock";
  if (r < 0.66) return "paper";
  return "scissors";
};

// Play a single round
const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}.`;
  }
};

// Update the display on the page
const updateDisplay = (message) => {
  playerScoreEl.textContent = humanScore;
  computerScoreEl.textContent = computerScore;
  resultsEl.textContent = message;
};

// Check for end of game
const checkWinner = () => {
  if (humanScore === WINNING_SCORE || computerScore === WINNING_SCORE) {
    if (humanScore > computerScore) {
      resultsEl.textContent = "🎉 You win the game!";
    } else {
      resultsEl.textContent = "🤖 Computer wins the game!";
    }
    rockBtn.disabled = paperBtn.disabled = scissorsBtn.disabled = true;
  }
};

// Main play function (called when user clicks)
const handlePlayerChoice = (choice) => {
  const computerChoice = getComputerChoice();
  const message = playRound(choice, computerChoice);
  updateDisplay(message);
  checkWinner();
};

// Reset game
const resetGame = () => {
  humanScore = 0;
  computerScore = 0;
  rockBtn.disabled = paperBtn.disabled = scissorsBtn.disabled = false;
  updateDisplay("Game reset — start playing!");
};

// Event listeners
rockBtn.addEventListener("click", () => handlePlayerChoice("rock"));
paperBtn.addEventListener("click", () => handlePlayerChoice("paper"));
scissorsBtn.addEventListener("click", () => handlePlayerChoice("scissors"));
resetBtn.addEventListener("click", resetGame);

// Initialize display
updateDisplay("Click a button to play!");


/*
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const resetBtn = document.getElementById('resetBtn');

const playerScoreEl = document.getElementById('playerScore');
const computerScoreEl = document.getElementById('computerScore');
const resultsEl = document.getElementById('results');

//playRound = main function 
//when you playGame();, 5round game will run.
const playGame = () => {

  let humanScore = 0;
  let computerScore = 0;
  const WINNING_SCORE = 5;

  //computer choice
  const getComputerChoice = () => {
    const computerChoice = Math.random();

    if (computerChoice < 0.33) {
      return "rock";
    } else if (computerChoice < 0.66) {
      return "paper";
    } else {
      return "scissors";
    }
  }
  console.log(getComputerChoice());

  //human choice
  const getHumanChoice = () => {
    const humanChoice = prompt("What is your choice between Rock, Paper and Scissor?");
    if (!humanChoice){
      return null; //if user close the prompt box or leaves empty
    }
    return humanChoice.toLowerCase();
  }
  console.log(getHumanChoice());

  const playRound = (humanChoice, computerChoice) => {

    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log ("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      console.log("You win!");
      humanScore++;

    } else {
      console.log("you lose!");
      computerScore++;
    }
  };

  //play 5 rounds
  for (let i = 0; i < 5; i++) {
  const humanSelection = getHumanChoice(); 
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  }

  //decide the winner
  if (humanScore > computerScore) {
    console.log("you win the game");
  } else if (humanScore < computerScore){
    console.log("computer wins the game");
  } else {
    console.log("tie");
  }
}
playGame();
*/