function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const buttonRef = document.querySelector('.change-color')
const bodyRef = document.querySelector('body')

buttonRef.addEventListener('click', () => {
  bodyRef.style.backgroundColor = getRandomHexColor()
})
