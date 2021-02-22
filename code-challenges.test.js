// ASSESSMENT 2: Coding practical questions with Jest

// const { test, expect, it } = require("@jest/globals")


// const { test } = require("@jest/globals")

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

var num1 = 15
// create function and set a value that will store the number divided
const numDivided = (value) => {
    // divide the number by three by using modulo to check if there is anything left and that will show if number is or isn't divisible by three
    if (value % 3 === 0) {
    return `${value} is divisible by three`
    } else if (value % 3 !== 0) {
        // set a return for the outcome
        return `${value} is not divisible by three`
    }
}
// / a) Create a test with expect statements for each of the variables provided.

// create a test
test('when numDivided is called, check to see if number provided is divisible by 3', () => {
var num1 = 15
// create a const that takes the function and a number
var actualResult = numDivided(num1)
// the const should be equal to the result of the function
expect (actualResult).toEqual(`${num1} is divisible by three`);
})
// Expected output: "15 is divisible by three"

var num2 = 0
// create a test
test('when numDivided is called, check to see if number provided is not divisible by 3', () => {
    const num2 = 0
    // create a const that takes the function and a number
    const actualResult = numDivided(num2)
    // the const should be equal to the result of the function
    expect(actualResult).toEqual(`${num2} is divisible by three`);
    })
// Expected output: "0 is divisible by three"

var num3 = -7

test('when numDivided is called, check to see if number provided is not divisible by 3', () => {
    const num3 = 7
    // create a const that takes the function and a number
    const actualResult = numDivided(num3)
    // the const should be equal to the result of the function
    expect(actualResult).toEqual(`${num3} is not divisible by three`);
    })
// Expected output: "-7 is not divisble by three"





// b) Create the function that makes the test pass.





// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
const lettersCap = (array) => {
    // use map to locate each object in the array
    let eachItem = array.map(value => {
        // use uppercase to capitalize first letter in each string(object) thats inside the array
        return value[0].toUpperCase() + value.substring(1)
    })
    return eachItem
}
// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// b) Create the function that makes the test pass.

test ('when lettersCap is called, return each item in the array capitalized', () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    const results = lettersCap(randomNouns1)

    expect(results).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
})



var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
// b) Create the function that makes the test pass.

test ('when lettersCap is called, return each item in the array capitalized', () => {
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
    const results = lettersCap(randomNouns2)

    expect(results).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
})




// --------------------3) Create a function that takes in an array of mixed data types and returns an array with ONLY NUMBERS sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var mixedDataArray1 = [true, 8, "hello", -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 107]

test('when onlyNums is called, you should get only numbers', () => {
    const mixedArray1 = [true, 8, "hello", -8, null, 0, 46, 59, 107, "hey!"]
    const actualResult = onlyNums(mixedArray1)
    expect(actualResult).toEqual([-8, 0, 8, 46, 59, 107])
})

var mixedDataArray1 = [3, "yo!", 94, -9, false, 0, 18, "hola!"]
// Expected output: [-9, 0, 3, 18, 94]

test('when onlyNums is called, you should get only numbers', () => {
    const mixedArray1 = [3, "yo!", 94, -9, false, 0, 18, "hola!"]
    const actualResult = onlyNums(mixedArray1)
    expect(actualResult).toEqual([-9, 0, 3, 18, 94])
})



// b) Create the function that makes the test pass.

const onlyNums = (array) => {
    // use filter method to filter out the numbers
    let findingNums = array.filter(function(value) {
    return (typeof value === "number")
    })
    // use sort to sort numbers in order from lowest to highest
    function sortNumber(a, b) {
        return a - b;
     }
    return findingNums.sort(sortNumber)
}



// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
test('when vowels is called, the return should be the index of the first vowel', () => {
    const vowelTester1 = "learn"
    const firstVowel = vowels(vowelTester1)
    expect(firstVowel).toEqual(1)
})
// Expected output: 1


var vowelTester2 = "academy"
test('when vowels is called, the return should be the index of the first vowel', () => {
    const vowelTester2 = "academy"
    const firstVowel = vowels(vowelTester2)
    expect(firstVowel).toEqual(0)
})
// Expected output: 0


var vowelTester3 = "challenge"
test('when vowels is called, the return should be the index of the first vowel in the string', () => {
    const vowelTester3 = "challenge"
    const firstVowel = vowels(vowelTester3)
    expect(firstVowel).toEqual(2)
})
// Expected output: 2



   

// b) Create the function that makes the test pass.
const vowels = (strr) => {
    // create a let that holds the value of the array and use split to split the array
    let firstVowel = strr.split('')
    for(let i = 0; i < firstVowel.length; i++) {
        let value = firstVowel[i]
        // log index as soon as function runs into a vowel
        if (['a', 'e', 'i', 'o', 'u'].includes(value.toLowerCase())) {
            return i;
        }
    }
}



//  so i figured out how jest works and i think i kinda mastered how to type a test in and run it. i could've used a describe and bulked some of the tests together and use describe(
    // it()  but i decided to do each one individually. i didn't pseudo code a lot because for the most part i knew what was going on, and there was a lot of repitition.
// for some reason: const { test, expect, it } = require("@jest/globals") pops up inside my code everytime i run yarn jest(at the very top, so it was hard to figure out what was wrong art first)
