const refs = {
  formRef: document.querySelector('.login-form'),
  submitRef: document.querySelector('button[type="submit"]'),
}



refs.formRef.addEventListener('submit', (event) => {
  event.preventDefault()
  const {
    elements: { email, password },
  } = event.currentTarget

  email.value === '' || password.value === ''
    ? alert('Please fill in all the fields!')
    : console.log({ email: email.value, password: password.value })
})
