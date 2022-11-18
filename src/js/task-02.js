const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const navUl = document.querySelector("ul[id=ingredients]");
console.log(navUl);

// const list = [];

// ingredients.forEach((ingredient) => {
 
//   const navEl = document.createElement("li");
//   navEl.classList.add("item");
//   navEl.textContent = ingredient;
//   list.push(navEl)
//   // console.log(navEl);
// });

const makeList = ingredients => {
  return ingredients.map(ingredient => {
  const navEl = document.createElement("li");
  navEl.classList.add("item");
  navEl.textContent = ingredient;
  return navEl
});
};

const list = makeList(ingredients);

console.log(list);

navUl.append(...list);

