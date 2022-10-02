const inputRef = document.querySelector('#name-input')
console.log(inputRef)

const spanRef = document.querySelector('#name-output')
console.log('~ spanRef', spanRef)

inputRef.addEventListener('input', (event) => {
  spanRef.textContent = event.currentTarget.value
})
