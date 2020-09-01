import element from "../../elements";
import generateHtml from "./generateHtml";
import insertImg from "./inserImg";
import allProducts from "./allProducts";
function products() {
  const product = allProducts[0];
  Object.keys(product).forEach((item) => {
    const html = generateHtml(product[item]);
    element.recipesList.innerHTML += html;
  });
  const recipesItem = document.querySelectorAll(".popular-recipes__item");
  const allItems = [...recipesItem];
  allItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.classList.contains("popular-recipes__item")) {
        const imgSrc = e.target.children[0].src;
        insertImg(imgSrc);
      }
    });
  });
}
products();

export default products;
