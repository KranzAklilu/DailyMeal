const query = (root) => {
  return document.querySelector(`.${root}`);
};
const element = {
  hamburger: query("hamburger"),
  nav: query("nav"),
  searchInput: query("header__input-container"),
};
export default element;
