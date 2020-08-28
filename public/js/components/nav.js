import element from "../elements";
const events = function () {
  element.hamburger.addEventListener("click", (e) => {
    element.hamburger.classList.toggle("hamburger--active");
    element.nav.classList.toggle("nav--active");
  });
};
events();

export default events;
