const categories = document.querySelectorAll('.item')
console.log('Number of categories:', categories.length)

for (let i = 0; i < categories.length; i += 1) {
  console.log('Category:', categories[i].firstElementChild.textContent)
  console.log('Elements:', categories[i].lastElementChild.children.length);
}