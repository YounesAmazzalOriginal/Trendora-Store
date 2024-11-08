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
      eachDressStyleLink.style.color = "";
    });
}
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
  const MinPrice = parseFloat(
    document.querySelector(".price-select-min").value
  );
  const MaxPrice = parseFloat(
    document.querySelector(".price-select-max").value
  );

  document
    .querySelectorAll(".product-current-price")
    .productPrice.forEach((eachSinglePrice) => {
      const priceText = eachSinglePrice.textContent.replace("$", "");
      const SinglePrice = parseFloat(priceText);

      if (SinglePrice >= MinPrice && SinglePrice <= MaxPrice) {
        eachSinglePrice.style.backgroundColor = "red";
      } else {
        eachSinglePrice.style.backgroundColor = "";
      }
    });
}
// function ApplyPrice() {
//   const MinPrice = parseFloat(
//     document.querySelector(".price-select-min").value
//   );
//   const MaxPrice = parseFloat(
//     document.querySelector(".price-select-max").value
//   );

//   // Loop through all price elements
//   document.querySelectorAll(".product-current-price").forEach((eachSinglePrice) => {
//     const priceText = eachSinglePrice.textContent.replace("$", "").trim();
//     const SinglePrice = parseFloat(priceText);

//     // Apply background color based on price range
//     if (SinglePrice >= MinPrice && SinglePrice <= MaxPrice) {
//       eachSinglePrice.style.backgroundColor = "red";
//     } else {
//       eachSinglePrice.style.backgroundColor = "";
//     }
//   });
// }

// /Product Filtring Price
