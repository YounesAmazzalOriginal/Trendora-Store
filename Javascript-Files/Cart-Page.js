document.addEventListener("DOMContentLoaded", function () {
  const cartContainer = document.querySelector(".product-cart-container");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  console.log(cart); // Log cart data to inspect

  // Function to render products
  function renderCart() {
    cartContainer.innerHTML = ""; // Clear the container before rendering

    cart.forEach((product, index) => {
      const productHTML = `<div class="single-product" data-index="${index}">
                <div class="product-image">
                  <img src="${product.image}" alt="${product.title}" />
                </div>
                <div class="product-information">
                  <h6>${product.title}</h6>
                  <div class="product-price-container">
                    <h4 class="product-current-price">${product.price}</h4>
                    <h4 class="product-old-price">400$</h4>
                    <span class="discount">-20%</span>
                  </div>
                </div>
                <button onclick="delete_product_from_checkout(this)" class="delete-product-from-checkout">
                  <i class="lni lni-trash-3"></i>
                </button>
                <div class="product-checkout-number">${product.number}</div>
            </div>`;
      cartContainer.innerHTML += productHTML;
    });

    // Nav Bag Notification Number
    const Product_Checkout_Count = document.querySelector(
      ".product-checkout-count"
    );
    localStorage.setItem("navbag-number", cart.length);

    const SavedBagNotification = localStorage.getItem("navbag-number");
    if (SavedBagNotification) {
      Product_Checkout_Count.innerHTML = SavedBagNotification;
    }

    // Total Quantity
    const Total_Quantity = document.querySelector(".total-quantity");
    Total_Quantity.innerHTML = cart.length;

    // Calculate Total Price
    const Total_Price = document.querySelector(".total-Price");

    const Resault = cart.reduce((sum, product) => {
      const price = parseFloat(product.price.replace(/[^0-9.-]+/g, ""));
      const number = parseInt(product.number, 10);
      return sum + price * number;
    }, 0);

    Total_Price.innerHTML = `$ ${Resault.toFixed(2)}`;
  }

  renderCart(); // Initial render

  // Function to delete a product from checkout
  window.delete_product_from_checkout = function (target) {
    const productIndex = target
      .closest(".single-product")
      .getAttribute("data-index");
    cart.splice(productIndex, 1); // Remove the product from the cart array

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    renderCart(); // Re-render the cart with updated data
  };
});
