
const form = document.getElementById('form')
const passwordEl1 = document.getElementById('password1')
const passwordEl2 = document.getElementById('password2')
const messageContainer = document.querySelector('.message-container')
const message = document.getElementById('message')

let isValid = false // All input fields are empty on page load
let passwordsMatch = false

function validateForm() {
  // Using Constraint API
  isValid = form.checkValidity() // Are all input fields filled out
  // console.log(isValid)
  if (!isValid) {                 // All input fields are not filled
    message.textContent = 'Please fill out all fields'
    message.style.color = 'red'
    messageContainer.style.borderColor = 'red'
    return // if inputs aren't filled, don't continue to code below
  }
  // Check whether passwords match
  if (passwordEl1.value === passwordEl2.value) {
    passwordsMatch = true
    passwordEl1.style.borderColor = 'green'
    passwordEl2.style.borderColor = 'green'
  } else {
    passwordsMatch = false
    message.textContent = 'Make sure passwords match'
    message.style.color = 'red'
    messageContainer.style.borderColor = 'red'
    passwordEl1.style.borderColor = 'red'
    passwordEl2.style.borderColor = 'red'
    return // if passwords don't match, don't continue to code below
  }
  // If all form input fields are fulled and the passwords match
  if (isValid && passwordsMatch) {
    message.textContent = 'Successfully Registered!'
    message.style.color = 'green'
    messageContainer.style.borderColor = 'green'
  }
}

// Using the 'name' property in HTML, store user data if it passes the processFormData() check
function storeFromData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value
  }
  // Do something with the user data (pass to server/database etc)
  console.log(user)
}

function processFormData(e) {
  e.preventDefault()
  // console.log(e)
  validateForm()
  // Submit User Data if Valid
  if (isValid && passwordsMatch) {
    storeFromData()
  }
} 

// Event Listener
form.addEventListener('submit', processFormData)

