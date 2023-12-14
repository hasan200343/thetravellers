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

//making a single product page for every product (but i think that's beyond my league for now)
//so i am gonna make new page for every product (FUCK MEEE!!!)
/* const productList = [
  {
    id: 0,
    title: "Dragon Printed 1",
    price: "Rs. 200",
    productDescription: "lorem Ipsum 1",
    img: "images/final_images/t-shirts2.jpg",
  },
  {
    id: 1,
    title: "Dragon Printed 2",
    price: "Rs. 300",
    productDescription: "Lorem Ipsum 2",
  },
  {
    id: 2,
    title: "Dragon Printed 3",
    price: "Rs. 400",
    productDescription: "Lorem Ipsum 3",
  },

  {
    id: 3,
    title: "Dragon Printed 4",
    price: "Rs. 500",
    productDescription: "Lorem Ipsum 3",
    img: "images/final_images/t-shirts2.jpg",
  },
  {
    id: 4,
    title: "Dragon Printed 5",
    price: "Rs. 800",
    productDescription: "Lorem Ipsum 3",
  },
  {
    id: 5,
    title: "Dragon Printed 6",
    price: "Rs. 800",
    productDescription: "Lorem Ipsum 3",
  },
  {
    id: 6,
    title: "Dragon Printed 7",
    price: "Rs. 800",
    productDescription: "Lorem Ipsum 3",
  },
  {
    id: 7,
    title: "Dragon Printed 8",
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
    window.location.href = "product-tshirts-printed.html";
  } else {
    alert("Product not found.");
  }
}
 */
