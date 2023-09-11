// this script will highlight the current navbar selection
document.querySelectorAll('.NavLink').forEach(link => {
    if(link.href === window.location.href){
        link.setAttribute('aria-current', 'page')
    }
})

// message over console
console.log("This is a hidden message for those who wants to inspect for js file (; \n Hello World!")



const form = document.querySelector("#form")
const submitButton = document.querySelector("#submit")
const scriptURL = 'https://httpbin.org/post'

form.addEventListener('submit', e => {
  submitButton.disabled = true
  e.preventDefault()
  let requestBody = new FormData(form)
  fetch(scriptURL, { method: 'POST', body: requestBody})
    .then(response => {
       alert('Success!', response)
       submitButton.disabled = false
      })
    .catch(error => {
    alert('Error!', error.message)
      submitButton.disabled = false

    }
    )
})