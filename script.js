"use strict";

// DOM Element Selectors
const ratingCard = document.querySelector(".rating-card");
const thankYouCard = document.querySelector(".thank-you-card");
const ratingBtns = document.querySelectorAll(".rating-card__ratings-btn");
const submitBtn = document.querySelector(".rating-card__submit-btn");
const selectedNumber = document.querySelector(
  ".thank-you-card__selected-number",
);

//  Track the state of the user's selected score:
let selectedNum = 0;

// Select a rating score:
for (let i = 0; i < ratingBtns.length; i++) {
  ratingBtns[i].addEventListener("click", () => {
    // Remove the active styling from all buttons first:
    for (let j = 0; j < ratingBtns.length; j++) {
      ratingBtns[j].classList.remove("active");
    }
    // Brighten up the selected button:
    ratingBtns[i].classList.add("active");

    // Extract number text from the selected button:
    selectedNum = ratingBtns[i].textContent;
  });
}

// Submit actions:
submitBtn.addEventListener("click", () => {
  // This makes sure the user choses a number before submitting:
  if (selectedNum !== 0) {
    // Inject the selected rating score dynamically into the text field:
    selectedNumber.textContent = selectedNum;

    // Remove the rating card, show thank you card with selected num ratings:
    ratingCard.classList.add("hidden");
    thankYouCard.classList.remove("hidden");
  }
});
