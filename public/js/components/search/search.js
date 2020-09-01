import element from "../../elements";

const search = function () {
  window.onscroll = () => {
    const position = window.pageYOffset;
    if (position > 100) {
      if (
        element.searchInput.classList.contains(
          "header__input-container--active"
        )
      ) {
        return;
      }
      element.searchInput.classList.add("header__input-container--active");
    } else {
      element.searchInput.classList.remove("header__input-container--active");
    }
  };
};
search();
export default search;
