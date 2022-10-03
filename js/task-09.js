function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const buttonRef = document.querySelector('.change-color')
const bodyRef = document.querySelector('body')
const colorRef = document.querySelector('.color')

buttonRef.addEventListener('click', () => {
  const color = getRandomHexColor()
  bodyRef.style.backgroundColor = color
  colorRef.textContent = color
})
