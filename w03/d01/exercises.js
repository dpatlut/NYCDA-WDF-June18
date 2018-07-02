//Exercise One
// Write JS to handle when a person clicks on element with the id of submit-button to grab the value of the input field with the the id of input-important. Make sure you type something in the input field before you run your testing!

let submitButton = document.getElementById('submit-button');
let inputBox = document.getElementById('input-important');
let title = document.getElementById('nycda-title');


submitButton.addEventListener('click' , (e) => {
    console.log(inputBox.value)
    title.innerText = inputBox.value
    e.preventdefault();
})

//Exercise Two
// Create an HTML page with javascript that listens for a keypress event. When the user presses a key, the text of a h1 tag should show the value of the key they have pressed.
// Example: If the user presses J, the text inside the h1 should display J.

document.addEventListener('keypress', (e) => {
    console.log(e)
   title.innerText = e.key
});


//Validation

// Create an html page with a form. The form should include inputs for a username, email, and password as well as a submit button.

// In a Javascript file, write code that does the following things when clicking the submit button:

// checks that the password is "12345678"
// checks that the username contains at least one number
// Your page should also include an h1 tag. If the information in the form is correct, have Javascript change the text in the h1 to Correct otherwise change the text to Incorrect.

let valiForm = document.getElementById('myvalidation');
let emailField = document.getElementById('email');
let usernameField = document.getElementById('username');
let passwordField = document.getElementById('password');
const includesNumber = /[0-9]/;


valiForm.addEventListener('submit', (e) => {
  //If password is 12345678
   if( (passwordField.value === "12345678") && (usernameField.value.match(includesNumber)) ){
       console.log('THIS IS CORRECT')
        title.innerText = "CORRECT"
   }else{
       console.log('NO BUENO')
       title.innerText = "INCORRECT"
   }
  e.preventDefault();
});