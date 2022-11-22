const greetingDisplay = document.getElementById("greeting-display")
const btn = document.getElementById("btn")
const bauble = document.getElementById("bauble")
btn.addEventListener("click", writeGreeting)

const greetings = [
    "Santa Claus is coming to town!",
    "We wish you a Merry Christmas!",
    "Happy holidays!",
    "Ho, ho, ho! Merry Christmas!",
]

console.log('greetings.length', greetings.length)

function writeGreeting () {
    let slumptal = Math.floor(Math.random() * greetings.length) 
    console.log(slumptal);
    console.log('testa funktionen')
    greetingDisplay.textContent = greetings[slumptal]
}

// Task:
// Write a function to display a random greeting in the card.

// Stretch goals:
// - Allow the user to input to and from names.
// - Add an input for custom messages.