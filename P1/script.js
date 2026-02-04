const myForm = document.getElementById('myForm');
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const divElement = document.getElementById("myDiv");
const errorDivElement = document.getElementById("errorDiv");

divElement.style.display = "none";
errorDivElement.style.display = "none";

myForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const userName = nameInput.value;
    const userAge = parseInt(ageInput.value);

    divElement.style.display = "none";
    errorDivElement.style.display = "none";

    if (userAge >= 18) {
        divElement.textContent = `Welcome, ${userName}!`;
        divElement.style.display = "block";
    }
    else {
        errorDivElement.textContent = `Sorry ${userName}, you must be 18+ to enter.`;
        errorDivElement.style.display = "block";
    }
});