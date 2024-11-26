function customers_rightArrow() {
  document
    .querySelectorAll(".customer-reviews-box")
    .forEach((each_CommentCart) => {
      const cartWidth = each_CommentCart.getBoundingClientRect().width;

      const customers_slider_container = document.querySelector(
        ".customers-reviews-part2"
      );
      const ComputedStyle = window.getComputedStyle(customers_slider_container);
      const ReviewsContainerGap = parseFloat(ComputedStyle.gap);

      customers_slider_container.scrollBy({
        left: cartWidth + ReviewsContainerGap,
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
      const ComputedStyle = window.getComputedStyle(customers_slider_container);
      const ReviewsContainerGap = parseFloat(ComputedStyle.gap);

      customers_slider_container.scrollBy({
        left: -(cartWidth + ReviewsContainerGap),
        behavior: "smooth",
      });
    });
}
