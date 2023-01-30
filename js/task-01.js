const listEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${listEl.length}`);

const titleEl = document.querySelectorAll('h2');
const itemEl = document.querySelectorAll('li.item ul');

console.log(`Category: ${titleEl[0].textContent}`);
console.log(`Elements: ${itemEl[0].children.length}`);
console.log(`Category: ${titleEl[1].textContent}`);
console.log(`Elements: ${itemEl[1].children.length}`);
console.log(`Category: ${titleEl[2].textContent}`);
console.log(`Elements: ${itemEl[2].children.length}`);



