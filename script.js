
const form = document.getElementById('form')
const passwordEl1 = document.getElementById('password1')
const passwordEl2 = document.getElementById('password2')
const messageContainer = document.querySelector('.message-container')
const message = document.getElementById('message')

let isValid = false

function validateForm() {
  // Using Constraint API
  isValid = form.checkValidity()
  // console.log(isValid)
  message.textContent = 'Please fill out all fields'
  message.style.color = 'red'
  messageContainer.style.borderColor = 'red'
}



function processFormData(e) {
  e.preventDefault()
  // console.log(e)
  validateForm()
} 


// Event Listener
form.addEventListener('submit', processFormData)

