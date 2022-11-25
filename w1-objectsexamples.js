const person = {
    firstName: "Sally",
    lastName: "Evans",
    age: 27,
    occupation: "Sales assistant",
    married: false,
    homeOwner: false
}

object.property
person.firstName
console.log(person.firstName)

console.log(person["firstName"])

person.homeOwner = "true"

console.log(person)

const person = {
    firstName: "Sally",
    lastName: "Evans",
    age: 27,
    occupation: "Sales assistant",
    married: false,
    homeOwner: false,
    hobbies: ["tennis", "gardening", "bungee jumping"]
}

let day = "Monday"

const person = {
    firstName: "Sally",
    lastName: "Evans",
        age: 27,
        occupation: "Sales assistant",
        married: false,
        homeOwner: false,
        hobbies: ["tennis", "gardening", "bungee jumping"],
    }
if (day === "Saturday" || day === "Sunday") {
    console.log(`Great it's ${day}, let's play ${person.hobbies[0]}!`)`)
}
else {
    console.log(`Oh no! It's ${day} I hate being a ${person.occupation}")
}

const person = {
    firstName: "Sally",
    lastName: "Evans",
    age: 40,
    occupation: "Sales assistant",
    married: false,
    homeOwner: true,
    hobbies: ["tennis", "gardening", "bungee jumping"],
    marketingOp () {
        if (homeOwner == false && age > 25) {
            return "Send mortgate offer email."
        }
        else if (homeOwner == false && age < 25) {
            return "Send summer holiday fun credit card offer."
        }
        else if (homeOwner == true && age > 25) {
            return "Pension Investment offer."
                    }
                    else {
                        return "Send sensible Savings offer."
                    }
    }
}
console.log(person.marketingOp())

const person = {
    firstName: "Sally",
    lastName: "Evans",
    age: 40,
    occupation: "Sales assistant",
    married: false,
    homeOwner: true,
    hobbies: ["tennis", "gardening", "bungee jumping"],
    marketingOp() {
        if (this.homeOwner == false && this.age > 25) {
            return "Send mortgate offer email."
        } else if (this.homeOwner == false && this.age < 25) {
            return "Send summer holiday fun credit card offer."
        } else if (this.homeOwner == true && this.age > 25) {
            return "Pension Investment offer."
        } else {
            return "Send sensible Savings offer."
        }
    }
}