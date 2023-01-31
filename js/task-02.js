const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.querySelector('#ingredients');
const liIngredients = ingredients.length;

for(let i = 0; i < liIngredients; i += 1) {
	const li = document.createElement('li');
	li.textContent = ingredients[i];
	li.classList.add("item");
	ulIngredients.append(li);
}
