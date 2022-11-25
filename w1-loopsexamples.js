let favHolidayDestinations = [

    "Venice, Italy",
    "Paris, France",
    "Barcelona, Spain"
]

console.log(favHolidayDestinations[0])

console.log(favHolidayDestinations[1])

console.log(favHolidayDestinations[2])

/ let favHolidayDestinations = [

    "Venice, Italy",
    "Paris, France",
    "Barcelona, Spain"
]

For Loops

for (let i = 0; i < favHolidayDestinations.length; i++) {
    console.log(favHolidayDestinations[i])
}
   
for (initialExpression; condition; increment/decrementExpression) {
    // do stuff
}

for(let i = 0; i <= 10; i++) {
    console.log(i += 2 )
}

let evenNumber=[]

for(let n = 0; n < 20; n++) {
  if (n % 2 == 0) {
    (evenNumbers.push(n))
}
}
console.log('The even numbers between 0 and 20 are; ${evenNumber}')

While Loop

let lives = 3
while (lives > 0) {
    console.log("Well done! You're still in the game")
    lives--
}
console.log("Game over!!!")


While Loop

while(condition) {
    do stuff
}

let currentDiceRoll = "3"
while (currentDiceRoll != 1) {
    console.log(currentDiceRoll)
    currentDiceRoll = Math.floor(Math.random() * 6) + 1
}
console.log(currentDiceRoll)