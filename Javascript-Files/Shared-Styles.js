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

// Close Mobile Search Bar
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector(".close-mobile-search")
    .addEventListener("click", () => {
      const Search_Content_Container = document.querySelector(
        ".search-content-container"
      );
      Search_Content_Container.classList.remove("show-mobile-search");
    });
  document
    .querySelector(".mobilenav-search-icon")
    .addEventListener("click", () => {
      const Search_Content_Container = document.querySelector(
        ".search-content-container"
      );
      Search_Content_Container.classList.add("show-mobile-search");
    });
});
// /Close Mobile Search Bar

// Mobile Search for product
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector(".mobile-search-product")
    .addEventListener("click", () => {
      const search_bar = document.querySelector(".search-content input");
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
    });
});
// /Mobile Search for product

// CheckOut

// /CheckOut

// localStorage.clear();

// Get NavBag Notification Number From Cart Page
document.addEventListener("DOMContentLoaded", function () {
  const Product_Checkout_Count = document.querySelector(
    ".product-checkout-count"
  );

  const SavedBagNotification = localStorage.getItem("navbag-number");
  if (SavedBagNotification) {
    Product_Checkout_Count.innerHTML = SavedBagNotification;
  }
  // /Get NavBag Notification Number From Cart Page
  // Mobile
  const Mobile_Product_Checkout_Count = document.querySelector(
    ".mobile-product-checkout-count"
  );

  const Mobile_SavedBagNotification = localStorage.getItem(
    "mobile-navbag-number"
  );
  if (Mobile_SavedBagNotification) {
    Mobile_Product_Checkout_Count.innerHTML = Mobile_SavedBagNotification;
  }
  // /Mobile
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".search-li").addEventListener("click", () => {
    const search_nar = document.querySelector(".nav-search-container input");
    search_nar.focus();
  });
});
