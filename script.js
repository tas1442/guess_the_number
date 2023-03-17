"use strict";

/* console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉Correct number";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

console.log(document.querySelector(".guess").value);
 */

//funtions

function math() {
  let number = Math.trunc(Math.random() * 20 + 1);
  return number;
}

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
  return message;
}

//setting the state variables
let secretNumber = math();
let score = 20;
let highscore = 0;
document.querySelector(".number").value = secretNumber;

//setting the DOM on check button, coversion of input number to string (since all user inputs are strings) and checking the conditions

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // when input is not a number
  if (!guess) {
    displayMessage("⛔Not a number");
  }

  // when input is a correct number
  else if (guess === secretNumber) {
    displayMessage("🎉Correct number");
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "25%";
    document.querySelector(".number").textContent = guess;
    //setting the highscore
    if (highscore <= score) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
      document.querySelector(".highscore").textContent = score;
    }
  }
  //if the input is not a number
  else if (guess !== secretNumber) {
    //if score is above 1 but input is wrong
    if (score > 1) {
      guess > secretNumber
        ? displayMessage("📈 Too high!")
        : displayMessage("📈 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    }
    // when score is below 1
    else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

/* else if (guess > secretNumber) {
    if (score > 1) {
      displayMessage("
") "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("
") "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      displayMessage("
") "📈 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("
") "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
}); */

/* document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  guess === secretNumber
    ? (displayMessage("") "🎉Correct number")
    : guess > secretNumber
    ? (displayMessage("") "Too high")
    : guess < secretNumber
    ? (displayMessage("") "Too low")
    : "try again";
}); */

//setting the again button to refresh the game
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = math();
  console.log((document.querySelector(".number").value = secretNumber));

  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").value = secretNumber;
  displayMessage("start guessing");

  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".number").style.width = "25%";
});
