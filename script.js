const submitBtn = document.querySelector('.submit-btn');
const emailInput = document.querySelector('#email');
const flashMessage = document.querySelector('.flash-message')






submitBtn.addEventListener('click', () => {
    ValidateEmail(emailInput)
})

function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



    if (input.value.match(validRegex)) {

        emailInput.classList.remove('invalid');
        if (!flashMessage.classList.contains('hidden')) flashMessage.classList.add('hidden');
        return true;

    } 
    else {
        emailInput.classList.add('invalid');
        flashMessage.classList.remove('hidden');
        return false;

    }

}