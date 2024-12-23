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
  const Reviews_Content_title = document.querySelector(
    ".product-rating-and-reviews-container .title"
  );
  FAQ_Content.style.display = "block";
  Reviews_Content.style.display = "none";
  Reviews_Content_title.style.display = "none";
}
function ProductReviews_Button() {
  const FAQ_Content = document.querySelector("#Faq-container-ID");
  const Reviews_Content = document.querySelector(
    "#product-reviews-Elements-ID"
  );

  const Reviews_Content_title = document.querySelector(
    ".product-rating-and-reviews-container .title"
  );

  FAQ_Content.style.display = "none";
  Reviews_Content.style.display = "block";
  Reviews_Content_title.style.display = "flex";
}
// /Product Info FAQs / Rating Reviews

// FAQ
function OpenFaq(target) {
  const FAQ_Answer = target.querySelector(".answer-container");

  // Toggle the 'openAnswer' class for smooth CSS transitions
  FAQ_Answer.classList.toggle("openAnswer");

  if (FAQ_Answer.classList.contains("openAnswer")) {
    // Set the height and padding to display the answer
    FAQ_Answer.style.height = `${FAQ_Answer.scrollHeight}px`;
    FAQ_Answer.style.paddingBlock = `${FAQ_Answer.scrollHeight * 1.2}px`;
  } else {
    // Reset the height and padding to hide the answer
    FAQ_Answer.style.height = "0px";
    FAQ_Answer.style.paddingBlock = "0px";
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

// Send Data From Details TO Cart
function AddToCart() {
  // Get product details
  const title = document.querySelector("h2").innerText;
  const price = document.querySelector(".product-current-price").innerText;
  const image = document.querySelector(
    ".product-information-main-image img"
  ).src;
  const number = document.querySelector(".product-adding-counter").innerText;

  // Create product object
  const product = { title, price, image, number };

  // Store product in localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product added to cart!");

  // window.location.href = "../cart-page.html";
  window.location.href = "../Html-Files/Product-Detail-Page-dynamic.html";
}

// /Send Data From Details TO Cart
