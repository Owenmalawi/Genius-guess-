// DOM Elements
const homeScreen = document.getElementById("home-screen");
const gameScreen = document.getElementById("game-screen");
const instructions = document.getElementById("instructions");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const quitBtn = document.getElementById("quit-btn");
const startGame = document.getElementById("start-game");

// Game Variables
let step = 0;
let randomMultiplier;
let finalResult;

// Start Number Guess Game
startGame.addEventListener("click", () => {
  homeScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  startNumberGuess();
});

function startNumberGuess() {
  step = 0;
  randomMultiplier = Math.floor(Math.random() * 5) + 2; // Random number between 2 and 6
  finalResult = randomMultiplier * 2; // The result based on math
  instructions.textContent =
    "Imagine a number in your mind but don't tell anyone. Press 'Next' to proceed.";
}

nextBtn.addEventListener("click", () => {
  step++;
  if (step === 1) {
    instructions.textContent = `Add the same number to itself. Press 'Next' when done.`;
  } else if (step === 2) {
    instructions.textContent = `Multiply the result by ${randomMultiplier}. Press 'Next' when done.`;
  } else if (step === 3) {
    instructions.textContent = `Divide the result by the number you imagined. Press 'Next' when done.`;
  } else if (step === 4) {
    instructions.textContent = `The final result is: ${finalResult}!`;
  }
});

// Restart Game
restartBtn.addEventListener("click", () => {
  startNumberGuess();
});

// Quit Game
quitBtn.addEventListener("click", () => {
  gameScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");
});

