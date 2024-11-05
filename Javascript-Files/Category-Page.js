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
