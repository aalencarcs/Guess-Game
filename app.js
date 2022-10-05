"use strict";

let count = 20;

const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const again = document.querySelector(".again");
const score = document.querySelector(".score");
const newScore = document.querySelector(".highscore");
let savedHighScore = 0;

let randomNumber = Math.trunc(Math.random() * 20) + 1;

let newRandom = randomNumber;

check.addEventListener("click", function () {
  game();
});

again.addEventListener("click", function () {
  count = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.body.style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  message.textContent = "Start Guessing...";
  score.textContent = count;
  number.textContent = "?";
  guess.value = "";
});

function game() {
  let newGuess = Number(guess.value);

  if (!newGuess) {
    message.textContent = "⛔️ No number";
    count--;

    // when playes wins
  } else if (newGuess == randomNumber) {
    number.textContent = randomNumber;
    message.textContent = "🎉 Number correct";
    document.body.style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (count > savedHighScore) {
      savedHighScore = count;
      newScore.textContent = savedHighScore;
    }

    // guess is too high
  } else if (newGuess > randomNumber) {
    message.textContent = " 📈 Too high!";
    count--;
    // guess is too low
  } else if (newGuess < randomNumber) {
    message.textContent = "📉 Too low!";
    count--;
  }
  // Player lost
  if (count <= 0) {
    count = 0;
    message.textContent = "😭 Game Over";
  }

  // invalid number

  if (newGuess > 20 || newGuess < 1) {
    message.textContent = "⛔️ Invalid Number";
  }

  score.textContent = count;
}
