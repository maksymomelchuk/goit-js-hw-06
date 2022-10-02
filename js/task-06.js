const inputRef = document.querySelector('#validation-input')

inputRef.addEventListener('blur', (event) => {
  if (event.currentTarget.value.length === 6) {
    if (event.currentTarget.classList.contains('invalid')) {
      event.currentTarget.classList.remove('invalid')
    }
    event.currentTarget.classList.add('valid')
  } else {
    if (event.currentTarget.classList.contains('valid')) {
      event.currentTarget.classList.remove('valid')
    }
    event.currentTarget.classList.add('invalid')
  }
})
