const generateHtml = (product) => {
  return `
         <div class="popular-recipes__item">
           <img
              class="popular-recipes__menu-img"
              src="${product.img}"
              alt="FOOD IMAGE"
            />
           <div class="popular-recipes__text-container">
             <h4 class="popular-recipes__item-header">${product.name}</h4>
             <p class="popular-recipes__item-desc">${product.desc}</p>
           </div>
         </div>
    `;
};

export default generateHtml;
