"use strict";

let count = 20;
const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const again = document.querySelector(".again");
const score = document.querySelector(".score");


let randomNumber = function () {
  return Math.round(Math.random() * 20);
};

let newRandom = randomNumber();
console.log(newRandom);
check.addEventListener("click", function () {
        game();
  
});

again.addEventListener("click", function() {
    
    //number.textContent = "?";
    location.reload();

})


function game() {

    let newGuess = Number(guess.value);

    if(!newGuess) {
      message.textContent = "⛔️ No number"
    }else if(newGuess == newRandom) {
      number.textContent = newRandom;
      message.textContent = "🎉 Number correct";
    } else if(newGuess > newRandom) {
      message.textContent = "To high";
      count--;
    } else if(newGuess < newRandom) {
      message.textContent = "To low";
      count--;
    }
    score.textContent = count;
    

}