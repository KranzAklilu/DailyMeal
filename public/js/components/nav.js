import element from "../elements";
import search from "./search";

const events = function () {
  element.hamburger.addEventListener("click", (e) => {
    element.hamburger.classList.toggle("hamburger--active");
    element.nav.classList.toggle("nav--active");
    element.searchInput.classList.toggle("header__input-container--active");
    console.log(element.searchInput.classList);
  });
};
events();

export default events;
