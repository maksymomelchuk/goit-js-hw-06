const refs = {
  formRef: document.querySelector('.login-form'),
  emailRef: document.querySelector('input[type="email"]'),
  passwordRef: document.querySelector('input[type="password"]'),
  submitRef: document.querySelector('button[type="submit"]'),
}

refs.formRef.addEventListener('submit', (event) => {
  event.preventDefault()

  const elementE = event.currentTarget.email.value
  console.log("~ elementE", elementE)

  // const {
  //   elements: { email, password },
  // } = event.currentTarget
  // console.log(elements)

  // if (email.value === '' || password.value === '') {
  //   return console.log('Please fill in all the fields!')
  // }
})
