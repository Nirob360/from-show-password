

// password show and hidden 
// js code 

let passWordInput = document.querySelector('.password-wrapper #password');
let iconToggle = document.querySelector('.password-wrapper span i');

iconToggle.onclick = function () {
    if (passWordInput.type === 'password') {
        passWordInput.type = 'text';
        iconToggle.classList.add("hide-btn")
       
    } else {
        passWordInput.type = 'password';
        iconToggle.classList.remove("hide-btn")
    }
}

