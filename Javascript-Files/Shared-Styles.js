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

// Mobile Nav Icons Active
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".mobilenav-icons-container a")
    .forEach((eachMobileNavLink) => {
      eachMobileNavLink.addEventListener("click", () => {
        document
          .querySelectorAll(".mobilenav-icons-container a")
          .forEach((disactivated) => {
            disactivated.classList.remove("activeMobileNavLink");
          });
        //
        eachMobileNavLink.classList.add("activeMobileNavLink");
      });
    });
});
// /Mobile Nav Icons Active



// Open & Close Responsive Search
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelector('.mobilenav-search-icon').addEventListener('click',()=>{
    const X =  document.querySelector('.mobilenav-search-container')
    X.classList.toggle('open-responsive-search')
  })
})

  // /Open & Close Responsive Search
