
 
function validateName() {
    const nameInput = document.getElementById("namen");
    const errorSpan = nameInput.nextElementSibling;
 
    if (nameInput.value.trim().length < 3) {
        nameInput.classList.add("hasError");
        nameInput.classList.remove("isValid");
        errorSpan.textContent = "Der Name muss mindestens 3 Zeichen lang sein.";
        errorSpan.style.display = "block";
        return false;
    } else {
        nameInput.classList.remove("hasError");
        nameInput.classList.add("isValid");
        errorSpan.textContent = "";
        errorSpan.style.display = "none";
        return true;
    }
}
 
function validateEmail() {
    const emailInput = document.getElementById("email");
    const errorSpan = emailInput.nextElementSibling;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
    if (!emailPattern.test(emailInput.value.trim())) {
        emailInput.classList.add("hasError");
        emailInput.classList.remove("isValid");
        errorSpan.textContent = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
        errorSpan.style.display = "block";
        return false;
    } else {
        emailInput.classList.remove("hasError");
        emailInput.classList.add("isValid");
        errorSpan.textContent = "";
        errorSpan.style.display = "none";
        return true;
    }
}
 
function validateMessage() {
    const messageInput = document.getElementById("text");
    const errorSpan = messageInput.nextElementSibling;
 
    if (messageInput.value.trim().length === 0) {
        messageInput.classList.add("hasError");
        messageInput.classList.remove("isValid");
        errorSpan.textContent = "Das Nachrichtenfeld darf nicht leer sein.";
        errorSpan.style.display = "block";
        return false;
    } else {
        messageInput.classList.remove("hasError");
        messageInput.classList.add("isValid");
        errorSpan.textContent = "";
        errorSpan.style.display = "none";
        return true;
    }
}
 
let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", validateForm);
 
function validateForm(event) {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();
 
    if (!isNameValid || !isEmailValid || !isMessageValid) {
        event.preventDefault();
    }
}
 
 
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
 
    form.addEventListener("submit", validateForm);
 
 
    document.getElementById("namen").addEventListener("input", validateName);
    document.getElementById("email").addEventListener("input", validateEmail);
    document.getElementById("text").addEventListener("input", validateMessage);
})
function showSuccessPopup() {
    const popup = document.getElementById("successPopup");
    const overlay = document.getElementById("overlay");
 
    popup.style.display = "block";
    overlay.style.display = "block";
 
 
    const button = document.getElementById("goHomeButton");
    button.addEventListener("click", () => {
        window.location.href = "freeride.html";
    });
}
 
function hideSuccessPopup() {
    document.getElementById("successPopup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
 
function validateForm(event) {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();
 
    if (!isNameValid || !isEmailValid || !isMessageValid) {
        event.preventDefault();
    } else {
        event.preventDefault();
        showSuccessPopup();
    }
}
 