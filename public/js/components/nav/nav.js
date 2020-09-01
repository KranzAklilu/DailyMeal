import element from "../../elements";

const events = function () {
  element.hamburger.addEventListener("click", (e) => {
    element.hamburger.classList.toggle("hamburger--active");
    element.nav.classList.toggle("nav--active");
  });
  if (element.hamburger.classList.contains("hamburger--active")) {
    element.searchInput.classList.add("header__input-container--active");
  }
};
events();

export default events;
