const query = (root) => {
  return document.querySelector(`.${root}`);
};
const element = {
  hamburger: query("hamburger"),
  nav: query("nav"),
  searchInput: query("header__input-container"),
  recipesList: query("popular-recipes__list"),
  recipesItem: query("popular-recipes__item"),
  recipesCard: query("popular-recipes__card"),
};
export default element;
