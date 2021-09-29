const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const arrIngredients = ingredients.map(item => {
  const arrIngredients = document.createElement("li");
  arrIngredients.classList.add("item");
  arrIngredients.textContent = item;
  return arrIngredients;
});
const createList = document.querySelector('#ingredients');
createList.append(...arrIngredients);

console.log(createList);