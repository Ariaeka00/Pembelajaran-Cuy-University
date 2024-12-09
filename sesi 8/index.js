let passwordLength = document.getElementById('passwordLength')
let password = document.getElementById('password')
let saveButton = document.getElementById('saveButton')

function generatePassword(len) {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const numeric = "0123456789"
    const symbol = "~!@#$%^&*()_+{}|?/';l.,"

    const data = lowerAlphabet + upperAlphabet + numeric + symbol
    let generator = '';
    for (let index = 0; index < len; index++) {
        generator += data[~~(Math.random() * data.length) ]

    }
    return generator;
}

function getPassword() {
   const newPassowrd = generatePassword(passwordLength.value)
   password.value = newPassowrd
}

function savePassword() {
    document.title = password.value
    saveButton.setAttribute('href', 'data:text/plain;charser=u tf-8,' + encodeURIComponent(`passowrd saya: ${document.title}`))

    saveButton.setAttribute('download', 'myPasswordGeneratorLOG.txt')
}