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

/* single product page for every product */
/* document.addEventListener("DOMContentLoaded", () => {
  // Retrieve the selected product details from localStorage
  const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

  if (selectedProduct) {
    const productDetailsContainer = document.getElementById("product-overview");
    const productImageContainer = document.querySelector(".carousel-item img");

    // Populate the product details on the page
    productDetailsContainer.innerHTML = `
            <h3>${selectedProduct.title}</h3>
            <p>Price: ${selectedProduct.price}</p>
            <img src=${selectedProduct.img}></img>`;
    productImageContainer.innerHTML = `
    
    `;
  } else {
    alert("Product details not found.");
  }
}); */
