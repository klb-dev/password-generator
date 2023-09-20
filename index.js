// random character array
let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// declaration of variables for password to generate
let btnD = document.getElementById("btn-dark");
let password1 = document.getElementById("password-1");
let password2 = document.getElementById("password-2");

// set the length of password
let passwordLength = 15;

// funciton to generate random character
function randCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length);
    return characters[randomChar];
}

// function to create password
function randomPassword() {
    let randPassword = "";
    for(let i = 0; i < passwordLength; i++){
        randPassword += randCharacter();
    }
    return randPassword
} 

// button action when pressed
btnD.addEventListener('click', function() {
    password1.textContent = randomPassword();
    password2.textContent = randomPassword();
});

// allows dark/light button to work

// variable for toggling dark/light mode
let btnToggle = document.getElementById("btn-toggle");

btnToggle.addEventListener('click', function () {
    let container = document.querySelector(".container");
    container.classList.toggle("container-light");
});







