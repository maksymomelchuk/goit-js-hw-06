const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]

const ingredientsSelector = document.querySelector('#ingredients')

const ingredientsMarkup = (array) => {
  return array.map((ingredient) => {
    const listElement = document.createElement('li')
    listElement.textContent = ingredient
    listElement.classList.add('item')
    return listElement
  })
}

const elements = ingredientsMarkup(ingredients)

ingredientsSelector.append(...elements)
