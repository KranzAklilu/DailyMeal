import element from "../../elements";
const insertImg = (img) => {
  element.recipesCard.innerHTML = `
            <div class="popular-recipes__card">
              <img
                class="popular-recipes__card-img"
                src="${img}"
                alt=""
                srcset=""
              />
              <h3 class="popular-recipes__card-header">cooking guide</h3>

              <h2 class="popular-recipes__card-desc">
                how to make a chocolate cake
              </h2>
              <a href="" class="popular-recipes__link">get recipes</a>
            </div> `;
};

export default insertImg;
