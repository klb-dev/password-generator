// random character array
document.addEventListener('DOMContentLoaded', function() {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()-_+=[]{},|:;<>.?/".split('');
    const noSymbolCharacters = characters.filter(c => /^[A-Za-z0-9]$/.test(c));
    let passwordLength = 15;
    
    let btnS = document.getElementById("btn-symbols");
    let btnWoS = document.getElementById("btn-wo-symbols");
    let passwordOutput = document.getElementById("password-output");
    let copyBtn = document.getElementById("copy-btn");
    let btnToggle = document.getElementById("btn-toggle");
    
    
    function randCharacterFrom(arr) {
        let randomChar = Math.floor(Math.random() * arr.length);
        return arr[randomChar];
    }
    
    function generatePassword(charSet) {
        let randPassword = "";
        for(let i = 0; i < passwordLength; i++){
            randPassword += randCharacterFrom(charSet);
        }
        return randPassword;
    }
    
    function displayPassword(pw) {
        passwordOutput.classList.remove('show');
        passwordOutput.textContent = pw;
        copyBtn.disabled = false;
        setTimeout(() => {
            passwordOutput.classList.add('show');
        }, 100);
    }
    
    // button action when pressed
    btnS.addEventListener('click', function() {
        displayPassword(generatePassword(characters));
    });
    
    btnWoS.addEventListener('click', function() {
        displayPassword(generatePassword(noSymbolCharacters));
    })

    copyBtn.addEventListener('click', function() {
        let password = passwordOutput.textContent;
        if (password) {
            navigator.clipboard.writeText(password)
                .then( () => {
                    copyBtn.textContent = 'Copied';
                    setTimeout(() => {
                        copyBtn.textContent = 'Copy';
                    }, 2000);
                })
                .catch (err => {
                    console.error('Error copying password: ', err);
                });
        }
    });
    
    btnToggle.addEventListener('click', function () {
        let container = document.querySelector(".container");
        container.classList.toggle("container-light");
    });
});






