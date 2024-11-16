// remove discount background-color if innrt html empty
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".discount").forEach((Eachdiscount) => {
    if (Eachdiscount.innerHTML == "") {
      Eachdiscount.style.backgroundColor = "transparent";
    }
  });
});
// /remove discount background-color if innrt html empty

// Send Data To Product Details Page
function ProductDetails(target) {
  const Title_p = target.querySelector("h6").innerHTML;
  const Image_p = target.querySelector(".product-image img").src;
  const CurrentPrice_p = target.querySelector(
    ".product-current-price"
  ).innerHTML;
  const OldPrice_p = target.querySelector(".product-old-price").innerHTML;
  const Discount_p = target.querySelector(".discount").innerHTML;
  const ReviewsNote_p = target.querySelector(".review-note").innerHTML;
  const ProductStars_p = target.querySelector(".stars-container").innerHTML;

  localStorage.setItem("Title_p", Title_p);
  localStorage.setItem("Image_p", Image_p);
  localStorage.setItem("CurrentPrice_p", CurrentPrice_p);
  localStorage.setItem("OldPrice_p", OldPrice_p);
  localStorage.setItem("Discount_p", Discount_p);
  localStorage.setItem("ReviewsNote_p", ReviewsNote_p);
  localStorage.setItem("ProductStars_p", ProductStars_p);

  window.location.href = "/Html-Files/Product-Detail-Page-dynamic.html";
}
// /Send Data To Product Details Page

// Search for product
function Search() {
  const search_bar = document.querySelector(".search-bar");
  if (search_bar.value !== "") {
    if (search_bar) {
      search_bar.value = search_bar.value.toLowerCase();
    }

    document.querySelectorAll(".single-product").forEach((eachProduct) => {
      const ProductType = eachProduct
        .getAttribute("data-product-search-type")
        .split(",");

      if (ProductType.includes(search_bar.value)) {
        eachProduct.style.display = "block";
        ProductResault.push(eachProduct);
      } else {
        eachProduct.style.display = "none";
      }
    });
  }
  //
  else {
    document.querySelectorAll(".single-product").forEach((eachProduct) => {
      eachProduct.style.display = "block";
    });
  }
}
// /Search for product

// localStorage.clear();

// Open-Close Mobile NavBar
function Open_Mobile_Navbar() {
  const MobileNavBar = document.querySelector("#mobile_NavBar ul");

  MobileNavBar.classList.toggle("active-mobile-navbar");
}
function Close_Mobile_Navbar() {
  const MobileNavBar = document.querySelector("#mobile_NavBar ul");
  if (MobileNavBar.classList.contains("active-mobile-navbar")) {
    MobileNavBar.classList.remove("active-mobile-navbar");
  } else {
    MobileNavBar.classList.add("active-mobile-navbar");
  }
}
// /Open-Close Mobile NavBar
