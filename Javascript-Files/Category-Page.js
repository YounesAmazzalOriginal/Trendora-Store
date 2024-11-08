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
}
// /Product Filtring Type

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
}
// /Product Filtring DressStyle

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
}
// /Product Filtring Colors
