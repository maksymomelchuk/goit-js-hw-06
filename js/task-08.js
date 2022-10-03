const refs = {
  formRef: document.querySelector('.login-form'),
  submitRef: document.querySelector('button[type="submit"]'),
}

refs.formRef.addEventListener('submit', (event) => {
  event.preventDefault()
  const {
    elements: { email, password },
  } = event.currentTarget

  if (email.value === '' || password.value === '') {
    alert('Please fill in all the fields!')
  } else {
    console.log({ email: email.value, password: password.value })
    event.currentTarget.reset()
  }
})
