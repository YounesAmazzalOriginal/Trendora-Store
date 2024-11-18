// Clear Filter
function NullTypeFilter() {
  document.querySelectorAll(".product-type-link").forEach((eachTypeLink) => {
    eachTypeLink.style.color = "";
  });
}
// -
function NullColorFilter() {
  document
    .querySelectorAll(".colors-inputs-container input")
    .forEach((eachColorRadio) => {
      eachColorRadio.checked = false;
    });
}
// -
function NullSizeFilter() {
  document
    .querySelectorAll(".category-size-buttons-container button")
    .forEach((eachSizeButton) => {
      eachSizeButton.classList.remove("active-size-button");
    });
  target.classList.add("active-size-button");
}
// -
function NullDressStyleFilter() {
  document
    .querySelectorAll(".product-dressStyle-link")
    .forEach((eachDressStyleLink) => {
      eachDressStyleLink.style.display = "block";
    });

  const MinInput = document.querySelector(".price-select-min");
  const MaxInput = document.querySelector(".price-select-max");
  MinInput.value = "";
  MaxInput.value = "";
}
// -

// /Clear Filter

// -----

// Product Filtring Type
function productTypeLink(target) {
  let ProsuctResaults = [];

  document.querySelectorAll(".single-product").forEach((each_singleProduct) => {
    const linkData = target.getAttribute("data-product-type");
    const ProductData = each_singleProduct.getAttribute("data-product-type");

    each_singleProduct.style.display = "none";
    if (linkData == ProductData) {
      each_singleProduct.style.display = "block";
      ProsuctResaults.push(each_singleProduct);
    }
  });

  //   Search Count
  const results_heading = document.querySelector(".results-heading");
  results_heading.querySelector("span").innerHTML = ProsuctResaults.length;
  results_heading.style.display = "block";
  //   /Search Count

  //   Click Styling
  document.querySelectorAll(".product-type-link").forEach((eachLink) => {
    eachLink.style.color = "";
    eachLink.querySelector("i").style.transform = "rotate(0deg)";
  });
  target.style.color = "black";
  target.querySelector("i").style.transform = "rotate(-90deg)";
  //   /Click Styling

  // NullTypeFilter()
  NullColorFilter();
  NullSizeFilter();
  NullDressStyleFilter();
}
function productTypeLink_All(target) {
  const results_heading = document.querySelector(".results-heading");
  results_heading.style.display = "none";

  document.querySelectorAll(".single-product").forEach((SingleProduct) => {
    SingleProduct.style.display = "block";
  });

  //   Click Styling
  document.querySelectorAll(".product-type-link").forEach((eachLink) => {
    eachLink.style.color = "";
    eachLink.querySelector("i").style.transform = "rotate(0deg)";
  });
  target.style.color = "black";
  target.querySelector("i").style.transform = "rotate(-90deg)";
  //   /Click Styling

  // NullTypeFilter()
  NullColorFilter();
  NullSizeFilter();
  NullDressStyleFilter();
}
// /Product Filtring Type

// =============

// Product Filtring Colors

//   input data-productColor
function RadioColorFilter(target) {
  let ProsuctResaults = [];

  document.querySelectorAll(".single-product").forEach((each_singleProduct) => {
    const ProductData = each_singleProduct
      .getAttribute("data-productColor")
      .split(",");
    const LinkData = target.getAttribute("data-productColor");

    if (ProductData.includes(LinkData)) {
      each_singleProduct.style.display = "block";
      ProsuctResaults.push(each_singleProduct);
    }
    //
    else {
      each_singleProduct.style.display = "none";
    }

    //   Search Count
    const results_heading = document.querySelector(".results-heading");
    results_heading.querySelector("span").innerHTML = ProsuctResaults.length;
    results_heading.style.display = "block";
    //   /Search Count
  });

  NullTypeFilter();
  // NullColorFilter()
  NullSizeFilter();
  NullDressStyleFilter();
}
// /Product Filtring Colors

// =============

// Product Filtring Size
function SizeFilter(target) {
  let ProsuctResaults = [];

  document.querySelectorAll(".single-product").forEach((each_singleProduct) => {
    const ButtonData = target.getAttribute("data-product-size");
    const ProductData = each_singleProduct.getAttribute("data-product-size");

    each_singleProduct.style.display = "none";
    if (ButtonData == ProductData) {
      each_singleProduct.style.display = "block";
      ProsuctResaults.push(each_singleProduct);
    }
  });

  //   Search Count
  const results_heading = document.querySelector(".results-heading");
  results_heading.querySelector("span").innerHTML = ProsuctResaults.length;
  results_heading.style.display = "block";
  //   /Search Count

  //   Click Styling
  document
    .querySelectorAll(".category-size-buttons-container button")
    .forEach((eachSizeButton) => {
      eachSizeButton.classList.remove("active-size-button");
    });
  target.classList.add("active-size-button");
  //   /Click Styling

  NullTypeFilter();
  NullColorFilter();
  // NullSizeFilter()
  NullDressStyleFilter();
}
function SizeFilter_All(target) {
  const results_heading = document.querySelector(".results-heading");
  results_heading.style.display = "none";

  document.querySelectorAll(".single-product").forEach((SingleProduct) => {
    SingleProduct.style.display = "block";
  });

  //   Click Styling
  document
    .querySelectorAll(".category-size-buttons-container button")
    .forEach((eachSizeButton) => {
      eachSizeButton.classList.remove("active-size-button");
    });
  target.classList.add("active-size-button");
  //   /Click Styling

  NullTypeFilter();
  NullColorFilter();
  // NullSizeFilter()
  NullDressStyleFilter();
}
// /Product Filtring Size

// =============

// Product Filtring DressStyle
function productDressStyleLink(target) {
  let ProsuctResaults = [];

  document.querySelectorAll(".single-product").forEach((each_singleProduct) => {
    const linkData = target.getAttribute("data-product-dressStyle");
    const ProductData = each_singleProduct.getAttribute(
      "data-product-dressStyle"
    );

    each_singleProduct.style.display = "none";
    if (linkData == ProductData) {
      each_singleProduct.style.display = "block";
      ProsuctResaults.push(each_singleProduct);
    }
  });

  //   Search Count
  const results_heading = document.querySelector(".results-heading");
  results_heading.querySelector("span").innerHTML = ProsuctResaults.length;
  results_heading.style.display = "block";
  //   /Search Count

  //   Click Styling
  document.querySelectorAll(".product-dressStyle-link").forEach((eachLink) => {
    eachLink.style.color = "";
    eachLink.querySelector("i").style.transform = "rotate(0deg)";
  });
  target.style.color = "black";
  target.querySelector("i").style.transform = "rotate(-90deg)";
  //   /Click Styling

  NullTypeFilter();
  NullColorFilter();
  NullSizeFilter();
  // NullDressStyleFilter()
}
function productDressStyleLink_All(target) {
  const results_heading = document.querySelector(".results-heading");
  results_heading.style.display = "none";

  document.querySelectorAll(".single-product").forEach((SingleProduct) => {
    SingleProduct.style.display = "block";
  });

  //   Click Styling
  document.querySelectorAll(".product-dressStyle-link").forEach((eachLink) => {
    eachLink.style.color = "";
    eachLink.querySelector("i").style.transform = "rotate(0deg)";
  });
  target.style.color = "black";
  target.querySelector("i").style.transform = "rotate(-90deg)";
  //   /Click Styling

  NullTypeFilter();
  NullColorFilter();
  NullSizeFilter();
  // NullDressStyleFilter()
}
// /Product Filtring DressStyle

// Product Filtring Price
function ApplyPrice() {
  let ProsuctResaults = [];

  const MinNumber = parseFloat(
    document.querySelector(".price-select-min").value
  );
  const MaxNumber = parseFloat(
    document.querySelector(".price-select-max").value
  );

  document
    .querySelectorAll(".product-current-price")
    .forEach((eachProductCurrentPrice) => {
      //
      const productPrice = parseFloat(
        eachProductCurrentPrice.textContent.replace("$", "")
      );
      const Product_Sibling =
        eachProductCurrentPrice.parentElement.parentElement.parentElement;
      Product_Sibling.style.display = "none";

      if (MinNumber <= productPrice && MaxNumber >= productPrice) {
        Product_Sibling.style.display = "block";
        ProsuctResaults.push(Product_Sibling);
      }
      //   Search Count
      const results_heading = document.querySelector(".results-heading");
      results_heading.querySelector("span").innerHTML = ProsuctResaults.length;
      results_heading.style.display = "block";
      //   /Search Count

      if (ProsuctResaults.length == 0) {
        results_heading.querySelector("span").innerHTML = "0";
      }
    });

  NullTypeFilter();
  NullColorFilter();
  NullSizeFilter();
  NullDressStyleFilter();
}
// /Product Filtring Price

// Product Option Filtring
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#rating_Select").addEventListener("change", () => {
    let ProsuctResaults = [];

    document
      .querySelectorAll(".product-container .single-product")
      .forEach((each_singleProduct) => {
        const selectValue = document.querySelector("#rating_Select").value;
        const singleProduct_RatingType =
          each_singleProduct.getAttribute("data-starsRating");

        each_singleProduct.style.display = "none";

        if (selectValue === "all" || singleProduct_RatingType === selectValue) {
          each_singleProduct.style.display = "block";
          ProsuctResaults.push(each_singleProduct);
        }
      });

    // Search Count
    const results_heading = document.querySelector(".results-heading");
    results_heading.querySelector("span").innerHTML = ProsuctResaults.length;
    results_heading.style.display = "block";
    // /Search Count

    NullTypeFilter();
    NullColorFilter();
    NullSizeFilter();
    NullDressStyleFilter();
  });
});

// /Product Option Filtring

// Open & Close LeftNav Responsive
function OpneLeftNavButtonResponsive() {
  const leftNav = document.querySelector(".left-nav-category");
  leftNav.classList.add("openLeftNavResponsive");
}
function CloseLeftNavButtonResponsive() {
  const leftNav = document.querySelector(".left-nav-category");
  leftNav.classList.remove("openLeftNavResponsive");
}
// /Open & Close LeftNav Responsive

// Close Left Nav Onclick On Choice

// /Close Left Nav Onclick On Choice
