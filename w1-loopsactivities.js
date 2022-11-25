Activity 1 - Add 2 more items to the array and change the initial expression.What happens ?

    let favHolidayDestinations=[
        "Venice, Italy",
    "paris, France",
        "Barcelona, Spain" , 
    "Accra, Ghana",
    "Manchester, England"
    ]

    for (let i = 1; i< favHolidayDestinations.length; i++) {
        console.log(favHolidayDestinations[i])
     }

    for (initialExpression; condition; increment/decrementExpression) {
        // do stuff
    }



    Activity 2 - Find even numbers in reverse order.

     let evenNumber=[]

for(let n = 0; n < 20; n++) {
  if (n % 2 == 0) {
    (evenNumbers.push(n))
}
}
console.log('The even numbers between 0 and 20 are; ${evenNumber}')

evenNumbersReverse = evenNumbers.reverse()
// additional method
for (let n = 20; n >= 0; n--) {
    if (n % 2 == 0) {
        (evenNumbersReverse.push(n))
    }
}

console.log(`The even numbers between 0 and 20in reverse order are ${evenNumbersReverse}`)




Activity 3 - 1 Find odd numbers 1 - 30

let oddNumbers = []
for (let n = 1; n <= 30; n++) {
    if (n % 2 == 1) {
        (oddNumbers.push(n))
    }
}
console.log(`The odd numbers between 0 and 30 are ${oddNumbers}`)



Activity 3 - 2 Create a while loop that checks age. While age is less than 18 log“ You’ re a child!”. When age is more than 
18 log“ You’ re an adult!”

    currentAge = 20

while (currentAge < 18) {
    console.log("You're a child")
    currentAge++
    if (age >= 18) {
                console.log("You're an adult")
    }
    console.log("You're an adult")


    Activity 4 - Generate 6 random numbers and log them to the console

    for (let i = 0; i < 6; i++) {
        console.log(Math.random())
    }

    let num = Math.random();

    for(i = 0; i < 6; i++) {
        console.log(num)
    }

    Activity 5 - Display 4 films stored in an array.Use a
    for loop to show each film in the array.Use an
    if statement to check
    if the 3 rd film in the array is Ghostbusters.If it is
    return“ Yay it’ s Ghostbusters”.If it isn’ t
    return“ Boo!We want Ghostbusters

    let myFavFilms = [
        "X-men",
        "Shrek",
        "Final Destination",
        "Why Did I get married"
    ]

    for (i = 0; i < myFavFilms.length; i++) {
        if (i == 2) {
            if (myFavFilms[i] == "Ghostbusters") {
                console.log(`Film no.${i+1} is ${myFavFilms[i]} and it's Ghostbusters! Yay!`);
            } else {
                console.log(`Film no.${i+1} is ${myFavFilms[i]} but booooh! We want Ghostbusters!`);
            }
        } else console.log(`Film no.${i+1} is ${myFavFilms[i]}`);
    }

    Activity 6 - Generate a random number between 1 and 30 six times.For each random number generated, check
    if this number is divisible by 7 or
    not.Log out a message to the console
    if it is divisible by 7 or not

    let foundNum = false;
    i = 6;
    while (i) {
        let num = Math.ceil(Math.random() * 7);
        //console.log(`i is ${i} and num is ${num}`);
        if (num && !(num % 7)) {
            console.log(`i is ${i} and num is ${num}`);
            foundNum = true;
        }
        i--;
    }
    if (!foundNum) console.log("Oh no, Nothing found!");

    

    Activity 7 - Imagine you’ re a programmer
    for a social media platform!You have been tasked with building a prototype
    for a mutual followers program.Create 2 arrays of
        followers e.g bobsFollowers & hannahsFollowers.In these arrays place 4 names as strings.Make sure there are 2 names that are in both arrays.Using a nested loop
    iterate over both arrays and console.log out the matching follower

    let bobsFollowers = [
        "Sienna",
        "Chantel",
        "Jamie",
        "Dion"
    ]

    let hannahsFollowers = [
        "Dion",
        "Jenna",
        "Katerina",
        "Whitford"
    ]

    for (i = 0; bobsFollowers[i] != null; i++) {
        for (j = 0; hannahsFollowers[j] != null; j++) {
            if (bobsFollowers[i] == j hannahsFollowers[j]) {
                console.log(`${ hannahsFollowers[j]} is a mutual friend of both Bob and Hannah. Hooray!`);
            }
        }
    }
   