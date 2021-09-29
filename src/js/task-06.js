const textInput = document.querySelector('#validation-input');

textInput.addEventListener("blur", () => {
    textInput.classList.remove('valid', 'invalid');

    if (textInput.value.length === parseInt(textInput.dataset.length)) {
        textInput.classList.add('valid');
    } else {
        textInput.classList.add('invalid');
    }    
});