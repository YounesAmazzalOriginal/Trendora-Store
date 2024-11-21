// function customers_rightArrow() {
//   const customers_slider_container = document.querySelector(
//     ".customers-reviews-part2"
//   );
//   customers_slider_container.scrollBy({
//     left: 800,
//     behavior: "smooth",
//   });
// }
// function customers_leftArrow() {
//   const customers_slider_container = document.querySelector(
//     ".customers-reviews-part2"
//   );
//   customers_slider_container.scrollBy({
//     left: -800,
//     behavior: "smooth",
//   });
// }

function customers_rightArrow() {
  document
    .querySelectorAll(".customer-reviews-box")
    .forEach((each_CommentCart) => {
      const cartWidth = each_CommentCart.getBoundingClientRect().width;

      const customers_slider_container = document.querySelector(
        ".customers-reviews-part2"
      );
      customers_slider_container.scrollBy({
        left: cartWidth,
        behavior: "smooth",
      });
    });
}
function customers_leftArrow() {
  document
    .querySelectorAll(".customer-reviews-box")
    .forEach((each_CommentCart) => {
      const cartWidth = each_CommentCart.getBoundingClientRect().width;
      const customers_slider_container = document.querySelector(
        ".customers-reviews-part2"
      );
      customers_slider_container.scrollBy({
        left: -cartWidth,
        behavior: "smooth",
      });
    });
}
