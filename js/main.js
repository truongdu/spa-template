let menuOpen = document.querySelector(".menu__collapse");
let menuClose = document.querySelector(".menu__close");
let headerMenu = document.querySelector(".header .menu");

menuOpen.addEventListener("click", function() {
  headerMenu.classList.add("is-open");
});

menuClose.addEventListener("click", function() {
  headerMenu.classList.remove("is-open");
});

document.addEventListener("click", function(event) {
  if (
    !headerMenu.contains(event.target) &&
    !event.target.matches(".menu__collapse")
  ) {
    headerMenu.classList.remove("is-open");
  }
});
