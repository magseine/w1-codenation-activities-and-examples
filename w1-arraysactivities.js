Activity 1 - Create an array containing your three favourite
films

// let favouritefilms = [
//     "Black Panther",
//     "Thor",
//     "Xmen"
// ]

console.log(favouriteFilms);

Activity 2 - Log the 1 st item in your film array to the console.

// console.log(favouritefilms[0])


Activity 3 - Replace the 2n d film in your array with a new
film.

// let favouritefilms = [
//     "Black Panther",
//     "Shrek",
//     "Xmen"
// ]


Activity 4 - Research the above methods and
try using
them with your film array

console.log(favouriteFilms.shift()) //return first element
console.log(favouriteFilms.shift())
console.log(favouriteFilms.map(function (str) {
                return str.toUpperCase()
            }
console.log(favFilms.slice(0, 1)) //return part of array from starting point to ending point
console.log(favFilms.splice(0, 2)) //remove part of array from starting point to ending point and put in new array
console.log(favHolidayDestinations.unshift(4, 2)) //add new elements at point of first argument, as many as second argument



Activity 5 - Create a list of your favourite songs(3 of them).Log
them to the console.Add another two songs to the
list using a method and then remove the last one

favSongs = [
    "Guilty",
    "Genie in the bottle",
    "Bulie"
]
favSongs.push("Amazing love, "Flying without wings")
// favSongs[4] = "Song5"

console.log(favSongs)

console.log(favSongs.slice(0, 4))
str = favSongs.toString()
console.log(favSongs.toString().replace(/,/g, ' '))

