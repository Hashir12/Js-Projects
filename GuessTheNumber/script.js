let randomNumber = parseInt((Math.random() * 100 + 1))
const submit = document.getElementById('subt')
const userInput = document.getElementById('guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')
const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true;
if(playGame) {
    submit.addEventListener('click',function(e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}
function validateGuess(guess) {
    if(isNaN(guess)) {
        alert('Please enter the valid number.')
    } else if(guess < 1) {
        alert('Please enter the number greater than 1.')
    } else if(guess > 100) {
        alert('Please enter the number less than 100.')
    } else {
        prevGuess.push(guess)
        if(numGuess === 10) {
            displayGuess(guess)
            displayMessage(`Game over. Random number was: ${randomNumber}`) 
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber) {
        displayMessage(`You gussed it right`)
        endGame()
    } else if(guess < randomNumber) {
        displayMessage(`Number is too less`)
    } else if(guess > randomNumber)  {
        displayMessage(`Number is too high`)
    }
}

function  displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame() {
    const newgameBtn = document.querySelector("#newGame")
    newgameBtn.addEventListener('click', function() {
        randomNumber = parseInt((Math.random() * 100 + 1))
        prevGuess = []
        numGuess = 0
        guessSlot.innerHTML = ''
        remaining.innerHTML = ''
        userInput.removeAttribute('disabled')
        submit.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
        lowOrHi.innerHTML = ''
    })
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled','')
    submit.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}