// Products Sorting
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#rating_Select").addEventListener("change", () => {
    document
      .querySelectorAll(".product-container .single-product")
      .forEach((each_singleProduct) => {
        //
        const selectValue = document.querySelector("#rating_Select").value;

        const singleProduct_RatingType =
          each_singleProduct.getAttribute("data-starsRating");

        each_singleProduct.style.display = "none";
        if (singleProduct_RatingType === selectValue) {
          each_singleProduct.style.display = "grid";
        }

        if (selectValue == "all") {
          each_singleProduct.style.display = "grid";
        }
        //
      });
  });
});
// /Products Sorting

// Pages Button Hover
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".number-page-buttons button")
    .forEach((eachButton) => {
      eachButton.addEventListener("click", function () {
        // button Not selected
        document
          .querySelectorAll(".number-page-buttons button")
          .forEach((btn) => {
            btn.classList.remove("page-btn-active");
          });

        // button selected
        this.classList.add("page-btn-active");
      });
    });
});
// /Pages Button Hover

// Products Color Sorting
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector(".colors-inputs-container")
    .addEventListener("change", () => {
      //

      document
        .querySelectorAll(".product-container .single-product")
        .forEach((each_singleProduct) => {
          //
          const singleProduct_ColorType =
            each_singleProduct.getAttribute("data-productColor");

          document
            .querySelectorAll(".colors-inputs-container input")
            .forEach((eachRadio) => {
              if (eachRadio.checked == true) {
                each_singleProduct.style.display = "none";
                if (singleProduct_ColorType.includes(eachRadio.value)) {
                  each_singleProduct.style.display = "grid";
                }
              }
              //
              document
                .querySelectorAll(".product-type-link")
                .forEach((eachProductTypeLink) => {
                  eachProductTypeLink.style.color = "";
                });
              const remove_type_sort =
                document.querySelector(".remove-type-sort");
              remove_type_sort.style.display = "none";
              //
              //
              document
                .querySelector(".remove-color-sort")
                .addEventListener("click", () => {
                  document
                    .querySelectorAll(".colors-inputs-container input")
                    .forEach((eachradio) => {
                      each_singleProduct.style.display = "";
                      eachradio.checked = false;
                    });
                });
            });

          document.querySelector("#rating_Select").value = "all";
        });
    });
});
// /Products Color Sorting

// Range Product
// range input
function priceRange() {
  const spanMin = document.querySelector(".range-spans .minValue");
  const spanMax = document.querySelector(".range-spans .maxValue");
  const range1 = document.querySelector(".range-input-1");
  const range2 = document.querySelector(".range-input-2");

  spanMin.innerHTML = `${range1.value} $`;
  spanMax.innerHTML = `${range2.value} $`;
}
// btn
function applyPrice() {
  const spanMin = document.querySelector(".range-spans .minValue");
  const spanMax = document.querySelector(".range-spans .maxValue");

  document.addEventListener("DOMContentLoaded", () => {
    document
      .querySelectorAll(".single-product")
      .forEach((each_SingleProduct) => {
        document
          .querySelectorAll(".product-current-price")
          .forEach((each_CurrentPrice) => {
            const range_input_1 = document.querySelector(".range-input-1");
            const range_input_2 = document.querySelector(".range-input-2");
            const priceInner = parseFloat(each_CurrentPrice.innerHTML);

            if (
              priceInner >= range_input_1.value &&
              priceInner <= range_input_2.value
            ) {
              each_SingleProduct.style.backgroundColor = "red";
            }
            //
            // else {
            //   each_SingleProduct.style.backgroundColor = "blue";
            // }
          });
      });
  });
}
// /Range Product

// Product Type Filter
function productSingleType(target) {
  document.querySelectorAll(".single-product").forEach((eachSingleProduct) => {
    const product_Type = eachSingleProduct.getAttribute("data-product-type");
    const Item_product_Type = target.getAttribute("data-product-type");
    const banIcon_1 = document.querySelector(".ban-icon-1");

    document
      .querySelectorAll(".product-type-link")
      .forEach((eachProductTypeLink) => {
        eachProductTypeLink.style.color = "";
      });
    target.style.color = "black";
    //

    banIcon_1.style.display = "block";
    eachSingleProduct.style.display = "none";

    if (Item_product_Type == product_Type) {
      eachSingleProduct.style.display = "grid";
    }
  });
}
function remove_TypeSort() {
  const remove_type_sort = document.querySelector(".remove-type-sort");
  remove_type_sort.style.display = "none";
  document.querySelectorAll(".single-product").forEach((eachSingleProduct) => {
    eachSingleProduct.style.display = "block";
  });
  document
    .querySelectorAll(".product-type-link")
    .forEach((eachProductTypeLink) => {
      eachProductTypeLink.style.color = "";
    });
}
// /Product Type Filter

// Product Size Filter
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".category-size-buttons-container button")
    .forEach((eachSizeButton) => {
      eachSizeButton.addEventListener("click", () => {
        document
          .querySelectorAll(".category-size-buttons-container button")
          .forEach((eachSizeButton) => {
            eachSizeButton.classList.remove("activeButton");
          });
        eachSizeButton.classList.add("activeButton");
        //
        document
          .querySelectorAll(".single-product")
          .forEach((each_singleProduct) => {
            const Product_size_data =
              each_singleProduct.getAttribute("data-product-size");
            const size_data_button =
              eachSizeButton.getAttribute("data-product-size");

            each_singleProduct.style.display = "none";
            if (size_data_button == Product_size_data) {
              each_singleProduct.style.display = "block";
            }
          });
      });
    });
});
// /Product Size Filter

// Product Dress Style Filter
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".category-dressStyle ul a")
    .forEach((eachDressStyleLink) => {
      eachDressStyleLink.addEventListener("click", () => {
        document
          .querySelectorAll(".single-product")
          .forEach((each_singleProduct) => {
            const Product_size_data = each_singleProduct.getAttribute(
              "data-product-dressStyle"
            );
            const size_data_button = eachDressStyleLink.getAttribute(
              "data-product-dressStyle"
            );

            each_singleProduct.style.display = "none";
            if (size_data_button == Product_size_data) {
              each_singleProduct.style.display = "block";
            }
          });
      });
    });
});

function productSingleDressStyle(target) {
  document
    .querySelectorAll(".product-dressStyle-link")
    .forEach((each_dressStyleLink) => {
      each_dressStyleLink.style.color = "";
    });
  target.style.color = "black";

  const remove_DressStyle_sort = document.querySelector(
    ".remove-DressStyle-sort"
  );
  remove_DressStyle_sort.style.display = "block";
}

function remove_DressStyleSort() {
  const remove_DressStyle_sort = document.querySelector(
    ".remove-DressStyle-sort"
  );
  remove_DressStyle_sort.style.display = "none";

  document
    .querySelectorAll(".product-dressStyle-link")
    .forEach((each_dressStyleLink) => {
      each_dressStyleLink.style.color = "";
    });

  document
    .querySelectorAll(".product-container .single-product")
    .forEach((each_singleProduct) => {
      each_singleProduct.style.display = "block";
    });
}
// /Product Dress Style Filter
