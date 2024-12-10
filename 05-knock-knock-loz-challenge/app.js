/*
Learning Objectives:
  1. Understand and utilize DOM element selection.
  2. Implement event listeners on images.
  3. Manipulate image attributes dynamically based on user interactions and randomness.

Brief:
You're presented with two closed doors. Your task is to choose one to reveal what's behind both. Will you find Loz behind the door you chose or the other one? The outcome should be random.

Expected Outcomes:
  1. Initially, both doors are closed.
  2. When one door is clicked, both doors should open, revealing either an empty room or Loz behind them.
*/

// Place your plan and solution below!
/*
let door1 = document.querySelector(".door");
let door2 = document.querySelector(".door":nth-Child(2));

door.addEventListener("click", reveal);


function reveal() {
  let randomNumber = Math.random();
  if (randomNumber < 0.5) {
    console.log("Empty room!");
  } else {
    console.log("Loz!");
  }
}
*/

//let door = document.querySelectorAll(".door");

let door1 = document.querySelector(".door:first-child");
let door2 = document.querySelector(".door:nth-child(2)");

door1.addEventListener("click", reveal);
door2.addEventListener("click", reveal);


function reveal() {
  let randomNumber = Math.random();
  if (randomNumber < 0.5) {
    door1.src="door-open-empty.png";
    door2.src="door-open-loz.png";
    console.log("Nothing's here!");
  } else {
    door1.src="door-open-loz.png";
    door2.src="door-open-empty.png";
    console.log("Loz is here!");
  }
}

