"use strict";

/* console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉Correct number";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

console.log(document.querySelector(".guess").value);
 */

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
console.log((document.querySelector(".number").value = secretNumber));

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔Not a number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉Correct number";
  } else if (guess >= secretNumber) {
    document.querySelector(".message").textContent = "Too high";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess <= secretNumber) {
    document.querySelector(".message").textContent = "Too low";
    score--;
    document.querySelector(".score").textContent = score;
  }

  document.querySelector(".highscore").textContent = score;
});

/* document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  guess === secretNumber
    ? (document.querySelector(".message").textContent = "🎉Correct number")
    : guess > secretNumber
    ? (document.querySelector(".message").textContent = "Too high")
    : guess < secretNumber
    ? (document.querySelector(".message").textContent = "Too low")
    : "try again";
}); */
