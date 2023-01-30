const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector("#ingredients");

const makeIngredientElements = elements => ingredients.map(ingredient => {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  itemEl.classList.add("item");

  return itemEl;
});

const elements = makeIngredientElements(ingredients);

ingredientsListEl.append(...elements);


