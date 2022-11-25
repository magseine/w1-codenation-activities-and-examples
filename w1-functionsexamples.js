const holidayDestination = () => {
console.log("Yay! I'm going on holiday!")
}

holidayDestination()

const holidayDestination = (country, month) => {
    console.log("Yay! I'm going on holiday!")
}}
    holidayDestination()

    const holidayDestination = (country, month) => {
        console.log(`Yay! I'm going on holiday to ${country} in ${month}. I can't wait.`)
    }
    holidayDestination("Spain", "June")

    const inventory = (productCode, departmentName, quantity) => {
        console.log(`${quantity} of ${productCode} sold from ${departmentName} department, need to update)
    stock by ${quantity}`)
}

inventory(412345, "baked goods", 65)

const multiply = (num1, num2) => {
    return num1 * num2
}

const multiply = (num1, num2) => {
    return num1 * num2
}
multiply(2, 5)

const multiply = (num1, num2) => {
    return num1 * num2
}
console.log(multiply(2,5))

/ const replenishStock = (productCode) => {
//     console.log(`order product number ${productCode} stock is low!`)
// }

const reducePrice = (productCode, originalPrice) => {
    let salePrice = originalPrice /= 2
    console.log(`Product number ${productCode} is now £${salePrice}``)
}

// const checkStock = (productCode, quantity, originalPrice) => {
//     if (quantity <= 10) {
//         replenishStock(productCode)
//     } else if (quantity > 100) {
//         reducePrice(productCode, originalPrice)
//     } else {
//         console.log("Don't order stock");
//     }
// }

checkStock(345678, 200, 100)

// const reducePrice = (productCode, originalPrice) => {
//     let salePrice = originalPrice /= 2
//     console.log(`Product number ${productCode} is now £${salePrice}`)
// }


// ARROW FUNCTION - modern way because they have flexibility and anonymity

const addMe = (num1, num2) => {
    return num1 + num2
}
addMe(4, 5)

DECLARATION

function addMeF(num1, num2) {
    return num1 + num2
}

addMe(4, 5)

anonymous / expression
function

const addMe = function (num1, num2) {
        //     return num1 + num2
        // }
        // addMe (4, 5)
        // 