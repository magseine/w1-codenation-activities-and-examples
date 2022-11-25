// Activity 1 - Create a variable called music. Write an if statement
that logs“ Oh, how relaxing”
if the music is classical
else if logs” Where are my dancing shoes!”
    if the music
is disco and or
else if logs“ Where’ s the party ? ”
    if the
music is dance.For anything
else log“ Turn it down”

// let music = "";

// if (music == "classical") {
//     console.log("Oh, how relaxing")
// }
// else if (music == "disco") {
//     console.log("Where are my dancing shoes!")
// }
// else if (music == "dance") {
//     console.log("Where's the party?")
// }
// else {
//     console.log("Turn it down")
// }



// Activity 2- Create a variable called age. Write an if 
statement that logs“ Yes I can serve you”
if the
age is greater than 17 and
else logs” You aren’ t
old enough”

// let age = "15"

// if (age > "17") {
//     console.log("Yes I can serve you")
// }
// else {
//     console.log("You aren't old enough")
// }

// let age = "14"
// if (age == 17) {
//     console.log("Yes I can serve you");
// } else {
//     console.log("You aren't old enough")
// }

// Activity 3 - Take your if statement and add a variable 
called country.Now check
if age > 17 and
country == “UK”

// let age = "18"
// let country = "UK"

// if (age > "17") {
//     console.log("Yes I can serve you")
// }
// else {
//     console.log("You aren't old enough")
// }

// if (country == "UK") {
//     console.log("Yes I can serve you")
// }

// let country = "UK"
// let age = "17"

// if (age > "17" && country == "UK") {
//     console.log("You can learn to drive")
// } else if (age < "17" && country == "UK") {
//     condole.log("You'll have to wait till you're old enough")
// } else if (age > "17" && country == "US") {
//     console.log("You're already old enough in your country")
// } else {
//     console.log("Let's go for a drive !")
// }

// Activity 4 -1 Create a weekend alarm. If it’s Saturday or 
Sunday log“ Yay it’ s the weekend!!”.Else log“ Oh
no, work again!”


    // Option 1

    // let alarm == "saturday"

    // if (alarm == "saturday" || "sunday") {
    //     console.log("Yay, it's the weekend!!".) 
    //     }
    //     else{
    //         console.log("Oh no, work again")
    //     }

    let day = "Friday"
if (day == "Sunday" | day == "Saturday") {
    console.log("Yay it's the weekend");
} else {
    console.log("Oh no, work again");
}
// Option 2

let day = 'saturday';

switch (day) {
    case 'saturday':
    case 'sunday':
        console.log("Yay, it's the weekend!!".)
        break
    default:
        console.log("Oh no, work again")
}

Activity 4 - 2 Create a variable
for any pizza topping.Create a
switch statement.If
the topping is one of your favourite ingredients, log to the console“ These are important ingredients
for my pizza!”.If you don’ t mind the
ingredient log, “I don’ t mind having $ {
    topping
}
on my pizza.Finally,
    for
any topping you don’ t like log“ $ {
    topping
}
should not be on a pizza.”.


// let topping = 'mushroom';
// topping = topping.toLowerCase()

// switch (topping) {
//     case 'pepperoni':
//     case 'jalepeno':
//     case 'onions':
//         console.log(`These are important ingredients for my pizza!${topping}`)
//         break
//     case 'ham':
//     case 'chicken':
//         console.log(`I don't mind having ${topping} on my pizza!`)
//     default:
//         console.log(`A ${topping} should not be on a pizza`)
// }


let topping = "peppporoni"

switch (topping) {
    case "pepperoni";
    case "jalapeno";
    console.log("These are important ingredients for my pizza!")
    break
    case "onions";
    case "chicken";
    console.log(`I don 't mind having ${topping} on my pizza`)
    break case "bacon"
    case "spinach"
    console.log(`$ {topping} should not be on a pizza`)
}
}

Activity 5 - Create a variable called password, check how many
letters are in the password,
    if there are less than 8, log to
the console that the password is too short.Otherwise
log the password to the console.

let password = ""

if ("password".length < 8) {
    console.log("password is too short")
} else {
    console.log($ {
        password
    })
}

password = "22456891"
if (password.length <= 7) {
    console.log("The password is too short")
} else {
    console.log("The password is long enough")
}

Activity 6 - Create a variable called num.Check
if the
number is a palindrome(looks the same forward as it does backwards e.g .1001 or 20202)

const palindromeNumber = (num) => {
    let rev = 0;
    let lastDigit;
    let x = num

    while (x != 0) {
        lastDigit = x % 10;
        rev = rev * 10 + lastDigit;
        x = Math.floor(x / 10);
    }

    if (num == rev) {
        console.log(`${num} it is a palindrome`);
    } else {
        console.log(`${num} not a palindrome`);
    }
}

palindrome(true);

num = "10201"
console.log(num.substr(0, Math.floor(num.length / 2)))
// if(num % 2 == 0){
// end = num.substr(Math.ceil(num.length/2))
// } else {
end = num.substr(Math.ceil(num.length / 2))
// }
console.log(end)

if (num.substr(0, Math.floor(num.length / 2)) == end.split("").reverse().join("")) {
    console.log("The number is a palindrone")
} else {
    console.log("The number is not palindrone")
}

Activity 7 - Create a variable called num.If num is divisible by 3
log“ fizz” to the console,
if it’ s divisible by 5 log“ buzz” to
the console,
if it’ s divisible by both 3 and 5 log“ fizz
buzz” to the console.Otherwise log num to the console

num = 15
if (num % 3 == 0 && num % 5 == 0) {
    console.log("fizz buzz")
} else if (num % 3 == 0) {
    console.log("fizz")
} else if (num % 5 == 0) {
    console.log("buzz")
} else {
    console.log("num")
}

Activity 8 - Create a variable called time, a variable called
placeOfWork and a variable called townOfHome.Create
an
if statement that logs to the console where someone is
at times of day.E.g.if the time is 7 I’ m at home, at 8 I’ m
commuting, at 9 I’ m at work

let time = 10
let placeOfWork = "Code Nation"
let townOfHome = "Bury"
if (time < 9 && time >= 8 || time >= 18 && time < 19) {
    console.log("I'm commuting")
}
if (time < 8 && time >= 0 || time >= 19 && time < 24) {
    console.log("I'm at home")
}
if (time >= 9 && time < 18) {
    console.log("I'm at work")
}

Activity 9 - Take the string“ jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh
gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”.
Find the index of a last vowel in the string.


string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
index = 0
// console.log(string.substring(10,11))
// console.log(string.length)
for (let i = 0; i < string.length; i++) {
    switch (string.substring(i, i + 1)) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            index = i + 1
            //gives the array index on last vowel plus 1 
            //because array starts at 0
            //console.log(string.substring(i,i+1))
            break
    }
}
console.log(index)

// Create a variable called word that takes a 
// string. Create an if statement that checks if the 
// last letter is the same as the first. If it is return 
// true, otherwise return false


Activity 10 Create a variable called word that takes a
string.Create an
if statement that checks
if the
last letter is the same as the first.If it is
return
true, otherwise
return false

word = "strings"
// console.log(word.substring(0,1))
if (word.substring(0, 1) == word.substring(word.length - 1)) {
    console.log("true")
} else {
    console.log("false")
}

Activity 11 - Create two variables called num1 and num2.
Create an
if statement that checks
if the result of
    the sum id even.If it is
return the number,
    otherwise
return the numbers multiplied together

num1 = 7
num2 = 2
if ((num1 + num2) % 2 == 0) {
    console.log(num1 + num2)
} else {
    console.log(num1 * num2)
}