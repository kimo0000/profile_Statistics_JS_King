const numOne = document.getElementById("num_one");
const numTwo = document.getElementById("num_two");
const numThree = document.getElementById("num_three");

let count1 = null;
let count2 = null;
let count3 = null;

let countOne = 0;
let countTwo = 0;
let countThree = 0;

window.addEventListener("DOMContentLoaded", () => {
  count1 = setInterval(() => {
    numOne.textContent = countOne;
    countOne++;
    if (countOne === 16) {
      countOne = 15;
      clearInterval(count1);
    }
  }, 100);

  count2 = setInterval(() => {
    numTwo.textContent = countTwo;
    countTwo++;
    if (countTwo === 261) {
      countTwo = 260;
      clearInterval(count2);
    }
  }, 1);

  count3 = setInterval(() => {
    numThree.textContent = countThree;
    countThree++;
    if (countThree === 28) {
      countThree = 27;
      clearInterval(count3);
    }
  }, 100);
});
