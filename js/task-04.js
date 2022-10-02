const buttonDecrementRef = document.querySelector(
  'button[data-action="decrement"]'
)

const buttonIncrementRef = document.querySelector(
  'button[data-action="increment"]'
)

const valueRef = document.querySelector('#value')

let counterValue = 0

buttonDecrementRef.addEventListener('click', () => {
  counterValue -= 1
  valueRef.textContent = counterValue
})
buttonIncrementRef.addEventListener('click', () => {
  counterValue += 1
  valueRef.textContent = counterValue
})

