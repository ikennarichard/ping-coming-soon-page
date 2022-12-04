
const message = document.getElementById('message');

const form = document.querySelector('form')

let inputElement = document.getElementById('user-email');

const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+).([a-z]+)?$/;

form.addEventListener('submit', validate);


//form police 👮🏽‍♂️
function validate(e) {
    
    let input = document.getElementById('user-email').value;

    if (input == '') {
        e.preventDefault();

        message.classList.add('error_message');

        inputElement.style.borderColor = 'var(--light-red)';

        inputElement.classList.add('myClass')
        message.innerText= 'Whoops! It looks like you forgot to add your email'; 
        
    }
    
    else if (!regx.test(input)) {
        e.preventDefault();
        message.classList.add('error_message')
        inputElement.style.borderColor = 'var(--light-red)'
        message.innerText = 'Please provide a valid email address'; 
       
    }
 
}