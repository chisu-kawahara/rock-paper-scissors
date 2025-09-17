
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
  return humanChoice;
}
console.log(getHumanChoice());

//declare the players score variables
let humanScore = 0;
let computerScore = 0; 
const playRound = (humanChoice, computerChoice) => {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    console.log ("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {console.log("You win!")
  } else {
    console.log("you lose!")
  };
};
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

//playRound
