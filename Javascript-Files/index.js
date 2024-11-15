function customers_rightArrow() {
  const customers_slider_container = document.querySelector(
    ".customers-reviews-part2"
  );
  customers_slider_container.scrollBy({
    left: 800,
    behavior: "smooth",
  });
}
function customers_leftArrow() {
  const customers_slider_container = document.querySelector(
    ".customers-reviews-part2"
  );
  customers_slider_container.scrollBy({
    left: -800,
    behavior: "smooth",
  });
}
