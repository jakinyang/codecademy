let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (uG, cG, target) => {
  let userDiff =  Math.abs(target-uG);
  let compDiff = Math.abs(target-cG);
  if (userDiff <= compDiff) {
    return true;
  } else if (userDiff > compDiff) {
    return false;
  }
}

const updateScore = (winner) => {
  if (winner === 'human') {
    return humanScore++;
  } else if (winner === 'computer') {
    return computerScore++;
  }
}

const advanceRound = () => {
  return currentRoundNumber++;
}