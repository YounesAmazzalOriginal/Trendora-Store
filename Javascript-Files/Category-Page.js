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
// function applyPrice() {
//   const minPrice = parseFloat(
//     document.querySelector(".price-select-min").value
//   );
//   const maxPrice = parseFloat(
//     document.querySelector(".price-select-max").value
//   );

//   document.querySelectorAll(".single-product").forEach((singleProduct) => {
//     document.querySelectorAll(".product-current-price").forEach((eachPrice) => {
//       const productPrice = eachPrice.innerHTML;

//       if (productPrice >= minPrice && productPrice <= maxPrice) {
//         singleProduct.style.backgroundColor = "deeppink";
//         singleProduct.style.transform = "scale(0.5)";
//       } else {
//         singleProduct.style.backgroundColor = "";
//         singleProduct.style.transform = "";
//       }
//     });
//   });
// }
// /Range Product

// Product Type Filter
function productSingleType(target) {
  document.querySelectorAll(".single-product").forEach((eachSingleProduct) => {
    const product_Type = eachSingleProduct.getAttribute("data-product-type");
    const Item_product_Type = target.getAttribute("data-product-type");
    const remove_Type_Sort = document.querySelector(".remove-type-sort");

    document
      .querySelectorAll(".product-type-link")
      .forEach((eachProductTypeLink) => {
        eachProductTypeLink.style.color = "";
      });
    target.style.color = "black";
    //

    remove_Type_Sort.style.display = "block";
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
