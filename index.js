function isTruthy(value){

if (value === "string"){
    console.log("true")


    } else if (value === false){
        console.log('The boolean value false is falsy');

    } else if (value === null){
        console.log('The null value is falsy');

    } else if (value === undefined){
        console.log('Undefined is falsy')

    } else if (value === 0){
        console.log('The number 0 is falsy (the only falsy number)')

    } else if (value === " "){
        console.log('The empty string is falsy (the only falsy string)')
    
    } else {
        console.log('unexpected error')
    }

}
isTruthy('I am a string')
isTruthy(false)
isTruthy(null)
isTruthy(undefined)
isTruthy(0)
isTruthy(" ")


//Numberline problem

// function numberLine(num1, num2){
//     if (num1 + num2 < -1000){
//         let sum = num1 + num2
//         console.log(sum + " is less than -1000")
//     } else if (num1 + num2 < 0){
//         let sum = num1 + num2
//         console.log(sum + " is a negative number")
//     } else if (num1 + num2 == 0){
//         let sum = num1 + num2
//         console.log(sum + ' is equal to 0')
//     } else if (num1 + num2 > 0 && num1 + num2 < 99){
//         let sum = num1 + num2
//         console.log(sum + ' is greater than 0')
//     } else if (num1 + num2 > 100){
//         let sum = num1 + num2
//         console.log(sum + ' is greater than 100')
//     } else {
//         console.log('Unexpected error')
//     }
// }

// numberLine(50, 51)
// numberLine(99, -2)
// numberLine(0, 101)
// numberLine(500, -500)
// numberLine(-1000, 0)
// numberLine(-5, 0)




//Greater than 5 Problem

// function greaterThanOrEqualToFive(val1, val2){
//     if(val1 >= 5 && val2 >= 5){
//         console.log('True')
//     } else {
//         console.log('false')
//     }
// }

// greaterThanOrEqualToFive(5, 6)
// greaterThanOrEqualToFive(10, 11)
// greaterThanOrEqualToFive(0, 0)
// greaterThanOrEqualToFive(1000, -1000)
// greaterThanOrEqualToFive(6, 4)
// greaterThanOrEqualToFive(5, 5)


// Pair and Compare Problem

// function pairAndCompare(param1A, param1B, param2A, param2B){
//     if (param1A == param1B && param2A == param2B){
//         console.log("true")
//     } else {
//         console.log('false')
//     }
// }

// pairAndCompare("cat", "cat", 6, "6")
// pairAndCompare("five", 5 , "dog", "dawg")
// pairAndCompare( 0, false, "horse", "horse")
// pairAndCompare("eight", "eight", "ate", "ate")
// pairAndCompare(11, "eleven", "four", "for")
// pairAndCompare("cake", "cake", "pie", "pie")