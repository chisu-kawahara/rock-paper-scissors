

//playRound = main function 
//when you playGame();, 5round game will run.
const playGame = () => {

  let humanScore = 0;
  let computerScore = 0; 

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
