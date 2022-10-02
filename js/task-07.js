const inputRef = document.querySelector('#font-size-control')
const textRef = document.querySelector('#text')

console.log(inputRef.value)

inputRef.addEventListener('change', () => {
  textRef.style.fontSize = `${inputRef.value}px`
})
