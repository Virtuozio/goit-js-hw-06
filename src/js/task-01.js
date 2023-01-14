const listRef = document.querySelector("#categories");
const listEl = [...listRef.children];
console.log(`Number of categories: ${listRef.childElementCount}`);

for (const element of listEl) {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.childElementCount}`);
}
