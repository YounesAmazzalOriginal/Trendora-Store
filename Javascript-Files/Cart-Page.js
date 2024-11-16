function customCheckedProduct(
  CheckedProduct_Image,
  CheckedProduct_Title,
  CheckedProduct_CurrentPrice,
  CheckedProduct_ProductNumber
) {
  return `<div class="single-product">
          <div class="image-area">
            <img src="${CheckedProduct_Image}" alt="" />
          </div>
          <div class="text-area">
            <h4>${CheckedProduct_Title}</h4>
            <div class="product-info-container">
              <span
                >size :
                <p>large</p></span
              >
              <span
                >color :
                <p>white</p></span
              >
            </div>
            <h3 class="product-current-price">${CheckedProduct_CurrentPrice}</h3>
            <button class="delete-product" onclick="delete_Product(this)">
              <i class="fa-solid fa-trash-can"></i>
            </button>
            <!-- <div class="product-count-container">
              <button>
                <i class="fa-solid fa-minus"></i>
              </button>
              <span class="product-counter-span">1</span>
              <button>
                <i class="fa-solid fa-plus"></i>
              </button>
            </div> -->
          </div>
          <h5 class="product-checkout-number">${CheckedProduct_ProductNumber}</h5>
        </div>`;
}
//
document.addEventListener("DOMContentLoaded", () => {
  const ProductContainer = document.querySelector(".product-cart-container");

  const productImage = localStorage.getItem("ProductDetails_Image");
  const productTitle = localStorage.getItem("ProductDetails_Title");
  const productPrice = localStorage.getItem("ProductDetails_CurrentPrice");
  const productNumber = localStorage.getItem("productNumber");

  if (productImage && productTitle && productPrice && productNumber) {
    ProductContainer.innerHTML += customCheckedProduct(
      productImage,
      productTitle,
      productPrice,
      productNumber
    );
  }
});
