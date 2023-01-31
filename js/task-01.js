const numberOfCategories = document.querySelectorAll('.item');

console.log(`Number of categories:  ${numberOfCategories.length}`);

numberOfCategories.forEach(categories => {
	const categoriesTitle = categories.firstElementChild;
	const categoriesItems = categories.lastElementChild;

	console.log(`Category: ${categoriesTitle.textContent} `);
	console.log(`Elements: ${categoriesItems.children.length}`);
})


