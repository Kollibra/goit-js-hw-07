
const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
  const {
    elements: { email, password } 
  } = event.currentTarget;


 if (email.value === "" || password.value === "") {
   return alert('All form fields must be filled in') 
   
}

 const userForm = { email: email.value, Password: password.value }
    console.log(userForm)
    event.currentTarget.reset()
}   
    
    