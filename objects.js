// Activity 1 -

const pet = {
        petName: "Preety",
        typeOfPet: "Rabbit",
        age: "3",
        colour: "white"
}

console.log(`My pet is a ${colour} ${typeOfPet} named ${petName}. She is ${age}.`)

// Activity 2 - 

const pet = {
    petName: "Preety",
    typeOfPet: "Rabbit",
    age: "3",
    colour: "grey"
}

console.log(`My pet is a ${colour} ${typeOfPet} named ${petName}. She is ${age}.`)

Activity 3 -

const pet = {
    petName: "Preety",
    typeOfPet: "Rabbit",
    age: "3",
    colour: "grey"
petFeatures: ["striped", "chubby", "loyal", "wags tails"]
}

Activity 4 -

const pet = {
    petName: "Preety",
    typeOfPet: "Rabbit",
    age: 3,
    colour: "grey",
    petFeatures: ["striped", "chubby", "loyal", "wags tail"],
    eat: true,
    drink: true,
    consuming() {
        if (this.eat == true && this.drink == true) {
            return `${this.petName} is eating and drinking!`
        } else if (this.eat == true && this.drink == false) {
            return `${this.petName} is eating!`
        } else if (this.eat == false && this.drink == true) {
            return `${this.petName} is drinking!`
        } else {
            return `${this.petName} isn't hungry or thirsty right now.`
        }
    }
}

// Activity 5 -

const coffeeShop ={
    branch: Bury,
    coffee: 2.50,
    tea: 2.00,
    flapjack: 1.50,
    doughnut: 0.5-
}

(add (coffee, tea, flapjack, doughnut) = {
        return (coffee + tea + flapjack + doughnut)
    }

console.log(add ())

work out method and function

drinks ordered
food ordered

you order is ...coffeeShop. items plus cost and total cost
