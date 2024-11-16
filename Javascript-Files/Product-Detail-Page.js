// Product Details Properties Buttons Active
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".product-about-container button")
    .forEach((btnActivated) => {
      btnActivated.addEventListener("click", () => {
        document
          .querySelectorAll(".product-about-container button")
          .forEach((btnDisactivated) => {
            btnDisactivated.classList.remove("product-details-active-button");
          });

        btnActivated.classList.add("product-details-active-button");
      });
    });
});
// /Product Details Properties Buttons Active

// Product Info FAQs / Rating Reviews
function Faq_Button() {
  const FAQ_Content = document.querySelector("#Faq-container-ID");
  const Reviews_Content = document.querySelector(
    "#product-reviews-Elements-ID"
  );
  FAQ_Content.style.display = "block";
  Reviews_Content.style.display = "none";
}
function ProductReviews_Button() {
  const FAQ_Content = document.querySelector("#Faq-container-ID");
  const Reviews_Content = document.querySelector(
    "#product-reviews-Elements-ID"
  );
  FAQ_Content.style.display = "none";
  Reviews_Content.style.display = "block";
}
// /Product Info FAQs / Rating Reviews

// FAQ
function OpenFaq(target) {
  const FAQ_Answer = target.querySelector(".answer-container");

  if (FAQ_Answer.style.height === "60px") {
    FAQ_Answer.style.height = "0";
    target.querySelector("i").classList.remove("fa-solid");
    target.querySelector("i").classList.add("fa-regular");
  }
  //
  else {
    FAQ_Answer.style.height = "60px";
    target.querySelector("i").classList.add("fa-solid");
    target.querySelector("i").classList.remove("fa-regular");
  }
}
// /FAQ

// Reviews Comments
let ProductReviewsCommentsNumber = [];
document.addEventListener("DOMContentLoaded", () => {
  const reviewsNumberSpan = document.querySelector(".reviews-comments-Span");
  document
    .querySelectorAll(".customer-reviews-box")
    .forEach((eachReviewComment) => {
      ProductReviewsCommentsNumber.push(eachReviewComment);
      reviewsNumberSpan.innerHTML = ProductReviewsCommentsNumber.length;
    });
});
// /Reviews Comments

// /Receive Data From Index Page
document.addEventListener("DOMContentLoaded", () => {
  const Image_Details = document.querySelector(
    ".product-information-main-image img"
  );
  // const ImageSide1_Details = document.querySelector(
  //   ".product-information-main-image img"
  // );
  // const ImageSide2_Details = document.querySelector(
  //   ".product-information-main-image img"
  // );
  // const ImageSide3_Details = document.querySelector(
  //   ".product-information-main-image img"
  // );
  const Title_Details = document.querySelector(
    ".product-information-texts-container h2"
  );
  const CurrentPrice_Details = document.querySelector(
    ".product-current-price-LS"
  );
  const OldPrice_Details = document.querySelector(".product-old-price-LS");
  const DiscountPrice_Details = document.querySelector(".discount-LS");
  const ReviewsNote_Details = document.querySelector(
    ".Product-Detail-reviewNote"
  );
  const ProductStars_Details = document.querySelector(
    ".stars-container-details"
  );

  const SideImages_p = document.querySelectorAll(
    ".product-information-side-image"
  );

  if (
    Title_Details &&
    Image_Details &&
    // ImageSide1_Details &&
    // ImageSide2_Details &&
    // ImageSide3_Details &&
    CurrentPrice_Details &&
    DiscountPrice_Details &&
    ReviewsNote_Details &&
    ProductStars_Details
  ) {
    Image_Details.src = localStorage.getItem("Image_p");
    // ImageSide1_Details.src = localStorage.getItem("ImageSide1_p");
    // ImageSide2_Details.src = localStorage.getItem("ImageSide2_p");
    // ImageSide3_Details.src = localStorage.getItem("ImageSide3_p");
    Title_Details.innerHTML = localStorage.getItem("Title_p");
    CurrentPrice_Details.innerHTML = localStorage.getItem("CurrentPrice_p");
    OldPrice_Details.innerHTML = localStorage.getItem("OldPrice_p");
    DiscountPrice_Details.innerHTML = localStorage.getItem("Discount_p");

    ReviewsNote_Details.innerHTML = localStorage.getItem("ReviewsNote_p");
    ProductStars_Details.innerHTML = localStorage.getItem("ProductStars_p");

    // This Will Change If We Have Product Side Images
    SideImages_p.forEach((eachSideImage, index) => {
      // First Side Image
      if (index == 0) {
        eachSideImage.src = localStorage.getItem("Image_p");
        // ImageSide1_Details.src = localStorage.getItem("ImageSide1_p");
      }
      // Second Side Image
      if (index == 1) {
        eachSideImage.src = localStorage.getItem("Image_p");
        // ImageSide2_Details.src = localStorage.getItem("ImageSide2_p");
      }
      // Thinrd Side Image
      if (index == 2) {
        eachSideImage.src = localStorage.getItem("Image_p");
        // ImageSide3_Details.src = localStorage.getItem("ImageSide3_p");
      }
    });
  }
});
// /Receive Data From Index Page

// Number Quantity
let productNumber = 0;

function PlusProduct() {
  productNumber++;
  const Product_Adding_Counter = document.querySelector(
    ".product-adding-counter"
  );
  Product_Adding_Counter.innerHTML = productNumber;

  const Add_Product_To_Cart = document.querySelector(".add-product-to-cart");
  Add_Product_To_Cart.disabled = false;
}
function MinusProduct() {
  const Product_Adding_Counter = document.querySelector(
    ".product-adding-counter"
  );
  const Add_Product_To_Cart = document.querySelector(".add-product-to-cart");

  if (productNumber > 0) {
    productNumber--;
    Add_Product_To_Cart.disabled = false;
  }
  if (productNumber == 0) {
    productNumber = 0;
    Add_Product_To_Cart.disabled = true;
  }
  Product_Adding_Counter.innerHTML = productNumber;
}
// /Number Quantity

// CheckOut
function AddToCart(target) {
  const Container =
    target.parentElement.parentElement.parentElement.parentElement;

  const ProductDetails_Image = Container.querySelector(
    ".product-information-main-image img"
  ).src;
  const ProductDetails_Title = Container.querySelector(
    ".product-information-texts-container h2"
  ).textContent;
  const ProductDetails_CurrentPrice = Container.querySelector(
    ".product-current-price"
  ).textContent;

  const newProduct = {
    image: ProductDetails_Image,
    title: ProductDetails_Title,
    price: ProductDetails_CurrentPrice,
    number: productNumber,
  };

  const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

  currentCart.push(newProduct);

  localStorage.setItem("cart", JSON.stringify(currentCart));

  window.location.href = "/Html-Files/Cart-Page.html";
}
// /CheckOut
