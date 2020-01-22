const btn = document.querySelector(".navbar__btn-open");
const navbar = document.querySelector(".navbar__list");
const closeBtn = document.querySelector(".navbar__btn-close");

if (navbar.classList.contains("navbar__list--active"))
  navbar.classList.remove("navbar__list--active");

btn.addEventListener("click", function() {
  navbar.classList.add("navbar__list--active");
  closeBtn.classList.add("navbar__btn-close--active");
});

closeBtn.addEventListener("click", function() {
  navbar.classList.remove("navbar__list--active");
  closeBtn.classList.remove("navbar__btn-close--active");
});
