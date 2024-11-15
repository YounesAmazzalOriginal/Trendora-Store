// CheckOut
function customProduct(product_image, product_title) {
  return `<div class="single-product">
          <div class="image-area">
            <img src="${product_image}" alt="" />
          </div>
          <div class="text-area">
            <h4>${product_title}</h4>
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
            <h3 class="product-current-price">145$</h3>
            <button class="delete-product" onclick="delete_Product(this)">
              <i class="fa-solid fa-trash-can"></i>
            </button>
            <div class="product-count-container">
              <button>
                <i class="fa-solid fa-minus"></i>
              </button>
              <span class="product-counter-span">1</span>
              <button>
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
        </div>`;
}
document.addEventListener("DOMContentLoaded", () => {
  //
  const cart_Image = document.querySelector(".image-area img");
  const cart_Text = document.querySelector(".text-area h4");
  const productNumber = document.querySelector(".product-checkout-number");
  cart_Image.src = localStorage.getItem("ProductImage");
  cart_Text.innerHTML = localStorage.getItem("ProductText");
  productNumber.textContent = localStorage.getItem("ProductCount");
  //
});
// /CheckOut
