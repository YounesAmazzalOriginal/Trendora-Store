function customCheckedProduct(
  CheckedProduct_Image,
  CheckedProduct_Title,
  CheckedProduct_CurrentPrice,
  CheckedProduct_ProductNumber
) {
  return `
    <div class="single-product">
      <div class="image-area">
        <img src="${CheckedProduct_Image}" alt="" />
      </div>
      <div class="text-area">
        <h4>${CheckedProduct_Title}</h4>
        <div class="product-info-container">
          <span>size: <p>large</p></span>
          <span>color: <p>white</p></span>
        </div>
        <h3 class="product-current-price">${CheckedProduct_CurrentPrice}</h3>
        <button class="delete-product" onclick="delete_Product(this)">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
      <h5 class="product-checkout-number">Quantity: ${CheckedProduct_ProductNumber}</h5>
    </div>`;
}

//
document.addEventListener("DOMContentLoaded", () => {
  const ProductContainer = document.querySelector(".product-cart-container");

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  let totalQuantity = 0;

  cart.forEach((product) => {
    ProductContainer.innerHTML += customCheckedProduct(
      product.image,
      product.title,
      product.price,
      product.number
    );

    totalQuantity += parseInt(product.number);
    totalPrice += parseInt(product.price);
  });

  const total_Quantity = document.querySelector(".total-quantity");
  total_Quantity.innerHTML = totalQuantity;
});
