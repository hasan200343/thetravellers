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

const productList = [
  {
    id: 0,
    title: "Car Body Graphics 1",
    price: "Rs. 600",
    productDescription: "lorem Ipsum 1",
  },
  {
    id: 1,
    title: "Car Body Graphics 2",
    price: "Rs. 700",
    productDescription: "Lorem Ipsum 2",
  },
  {
    id: 2,
    title: "Car Body Graphics 3",
    price: "Rs. 800",
    productDescription: "Lorem Ipsum 3",
  },

  {
    id: 3,
    title: "Car Body Graphics 4",
    price: "Rs. 800",
    productDescription: "Lorem Ipsum 3",
  },
  {
    id: 4,
    title: "Car Body Graphics 5",
    price: "Rs. 800",
    productDescription: "Lorem Ipsum 3",
  },
  {
    id: 5,
    title: "Car Body Graphics 6",
    price: "Rs. 800",
    productDescription: "Lorem Ipsum 3",
  },
  {
    id: 6,
    title: "Car Body Graphics 7",
    price: "Rs. 800",
    productDescription: "Lorem Ipsum 3",
  },
  {
    id: 7,
    title: "Car Body Graphics 8",
    price: "Rs. 800",
    productDescription: "Lorem Ipsum 3",
  },
];

function redirectToProduct(productId) {
  const selectedProduct = productList.find(
    (productList) => productList.id === productId
  );

  if (selectedProduct) {
    // Store the selected product details in localStorage (or use a different method)
    localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));

    // Redirect to the common product page
    window.location.href = "product-page-cars.html";
  } else {
    alert("Product not found.");
  }
}
