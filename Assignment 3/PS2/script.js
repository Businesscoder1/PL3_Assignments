const togglepass = document.getElementById('seePass');
const passwordInput = document.getElementById("password");

function validatePassword(password) {
    const minLength = /.{8,}/;
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    const digit = /\d/;
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

    if (!minLength.test(password)) {
        return "Password must be at least 8 characters long.";
    }
    if (!uppercase.test(password)) {
        return "Password must contain at least one uppercase letter.";
    }
    if (!lowercase.test(password)) {
        return "Password must contain at least one lowercase letter.";
    }
    if (!digit.test(password)) {
        return "Password must contain at least one digit.";
    }
    if (!specialChar.test(password)) {
        return "Password must contain at least one special character.";
    }
    
    return "Password is valid!";
}

function checkPassword() {
    const password = passwordInput.value; 
    const message = validatePassword(password);
    document.getElementById("result").textContent = "Your " + message;
}

togglepass.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglepass.textContent = type === 'password' ? 'Show' : 'Hide';
});
