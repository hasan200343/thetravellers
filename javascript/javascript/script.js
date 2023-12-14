const submitButton = document.getElementById("submit-form");
const outputThanks = document.querySelector(".after-submit");
const emailInput = document.querySelector("#e-mail");

function outputToparagraph() {
  if (emailInput.value === "") {
    alert("Please Input your Email address :) ");
  } else {
    outputThanks.textContent = "You will be Informed!!";
  }
}

submitButton.addEventListener("click", outputToparagraph);
