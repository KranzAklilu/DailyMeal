import element from "../elements";

const search = function () {
  element.searchInput.style.display = "block";
  window.onscroll = (e) => {
    const position = window.pageYOffset;
    if (position > 100) {
      element.searchInput.classList.add("header__input-container--active");
    } else {
      element.searchInput.classList.remove("header__input-container--active");
    }
  };
};
search();
export default search;
