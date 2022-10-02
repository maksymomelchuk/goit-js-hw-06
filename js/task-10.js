function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const refs = {
  userInput: document.querySelector('input[type="number"]'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxesRef: document.querySelector('#boxes'),
}
let size = 30

const arrayOfNumbers = (value) => {
  const array = []
  for (let i = 0; i < value; i += 1) {
    array.push(i)
  }
  return array
}

const createMarkup = (number, callback) => {
  const divMarkup = callback(number).map(() => {
    const div = document.createElement('div')
    div.style.width = `${size}px`
    div.style.height = `${size}px`
    div.style.backgroundColor = getRandomHexColor()
    size += 10
    return div
  })
  return divMarkup
}

refs.createBtn.addEventListener('click', () => {
  refs.boxesRef.append(...createMarkup(refs.userInput.value, arrayOfNumbers))
})

refs.destroyBtn.addEventListener('click', () => {
  refs.boxesRef.innerHTML = ''
  size = 30
})
