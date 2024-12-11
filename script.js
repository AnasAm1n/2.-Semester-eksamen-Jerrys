const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  var reviews = document.querySelectorAll(".review-item");
  var index = 0;

  function showReview() {
      reviews.forEach(function (review) {
          review.classList.remove("active");
      });
      reviews[index].classList.add("active");
      index = (index + 1) % reviews.length;
  }

  setInterval(showReview, 10000); // Update interval time to 10000 milliseconds (10 seconds)
});
