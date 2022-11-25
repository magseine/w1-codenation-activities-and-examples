Activity 1 - Console.log each variable.Update each variable.Change from
let to
const and
try to update the variable.
What happens ?

    // let firstName = "John"

    // let age = "26"

    // let universityStudent = "true"

    // favouriteDrink = "Malt"

    // thisNumber = "21"

    // firstName = "Jessica"

    // const age ="23"

    // console.log(firstName)

    // console.log(age)

    // console.log(universityStudent)

    // console.log(favouriteDrink)

    // console.log(thisNumber)

    // let modelOfCar = "Volvo"

    // console.log("I drive a " + modelOfCar)

    // let modelOfCar = "Volvo"

    // let firstName = "Mark"

    // let occupation = "Software Developer"

    // console.log("Hi, my name is " + firstName + " . I'm a " + occupation + " and I drive a " + modelOfCar)

    // console.log(`Hi, my name is ${firstName}. I'm a ${occupation} and I drive a ${modelOfCar}.`)




    Activity 2 - Write code that stores your name, age, and favourite colour.The stored data must be output to the console in a
complete sentence

// let name = "Jessica"

// let age = "32"

// let favouriteColour = "Red"

// console.log(`Hi, my name is ${name}. I'm ${age} and my favourite colour is ${favouriteColour}.`)


Activity 3 - Write code which stores what you may eat today
for breakfast, lunch and dinner.This must also be output to the
console in a complete sentence.Update the stored data and output the same sentence again to display the changes.


// let name = "Jessica"

// let age = "32"

// let favouriteColour = "Red"

// let breakfast = "Porridge"

// let lunch = "Fried Rice"

// let dinner = "Soup"

// console.log(`Hi, my name is ${name}. I'm ${age} and my favourite colour is ${favouriteColour}. I had ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner.`)



Activity 4 - Write code which will calculate how many days from today’ s date to your birthday.This must also be output to the console in
    a complete sentence.Why not stretch.Calculate how many days since your birth ? Hint Look
for“ Javascript Date” on MDN

// First option

// const birthdayCounter = (birthday) => {
//     let birthday = new Date(birthday)
//     let today = new Date(); // todays date
//     let oneDay = 1000 * 60 * 60 * 24 // day in milliseconds

//     let ageDays = (today - birthday) / oneDay;
//     ageDays = Math.floor(ageDays);

//     console.log(`Can't believe my birthday is in ${ageDays} days`);

//     const nextBDay = new Date(today.getFullYear(), birthd.getMonth(), birthd.getDate());

//     let daysTill = (nextBDay - today) / oneDay;
//     daysTill = Math.ceil(daysTill);

//     if (daysTill < 0) {
//         daysTill = daysTill + 365;
//     }; // correction if birthday has passed this year, inaccurate in leap year?

//     console.log(`It is ${daysTill} until your birthday`);
// }

// birthdayCounter('05 October 2023');

const today = new Date(today.getFullYear(2022), 10, 19);
const nextBirthday = new Date(today.getFullYear(2023), 09, 05);

if (today.getMonth() == 09 && today.getDate() > 05) {
    birthday.getFullYear(birthday.getFullYear() + 1);
}

const one_day = 1000 * 60 * 60 * 24;

const diff = Math.cell((birthday.getTime() - today.getTime() / (one_day)));

console.log(`$(diff) days left before my next Birthday!`)


todaysDate = new Date();
myBirthday = new Date(2023, 01, 22, 0, 0, 0, 0)
console.log(todaysDate);
console.log(myBirthday);
difference = myBirthday - todaysDate
console.log(Math.ceil(difference / 86400000)) //divide by the number of miliseconds and round to next day
//displays

todaysDate = new Date();
myBirth = new Date(1994, 01, 22, 0, 0, 0, 0)
console.log(todaysDate);
console.log(myBirth);
difference = todaysDate - myBirth
console.log(Math.floor(difference / 86400000)) //divide by the number of miliseconds and round to next day
//displays