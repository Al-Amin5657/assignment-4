// Problem-1: Mind Game
// You will take a number as a  parameter.Multiply the number by 3, add 10 with the number, divide the number by 2 and subtract the number by 5 and return.

function mindGame(number) {
    const multipleNUmber = number * 3;
    const addNumber = multipleNUmber + 10;
    const divisibleNumber = addNumber / 2;
    const subtractNumber = divisibleNumber - 5;
    return subtractNumber;

}
const positiveNumber = mindGame();
console.log(positiveNumber);

// Problem-2: Even Odd
// You will take input string as a parameter. You have to find out that how many character are there in the string? If the character numbers are even or odd. You have to return even or odd.
function evenOdd(str) {
    for (let i = 0; i < str.length; i++) {
        const element = str.length;
        if (element % 2 === 0) {
            return 'even';
        }
        else {
            return 'odd';
        }
    }
}
const myString = evenOdd();
console.log(myString);

// Problem-3: Is LG Seven
// You will take input number as a parameter. You have to find out the difference between the input number and 7. If the difference is less than 7, you will return the difference. If the difference is more than or equal 7, You have to return double of the input number.

function isLGSeven(number) {
    const difference = number - 7;
    if (difference < 7) {
        return difference;
    }
    else if (difference >= 7) {
        return number * 2;
    }
}
const myNumber = isLGSeven();
console.log(myNumber);

// Problem-4: Finding Bad Data
//  You will take an array as a parameter.The number can be zero or less than zero or positive. If the numbers are negative, We called bad data. And if the numbers are positive , We called good data. Now you have to find out how many bad data are there in the numbers and return. 

function findingBadData(numbers) {
    let badNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < 0) {
            badNumber.push(element);
        }
    }
    return badNumber.length;

}
const data = [];
const myData = findingBadData(data);
console.log(myData);

// Problem-5: Gems to Diamond
// You will take three input numbers as a parameter. First input number will be multiplied by 21. Second number will be multiplied by 32 and third number will be multiplied by 43. And you have add those numbers. If the added number is more than 1000 * 2, then you have subtract 2000 from the number and return.

function gemsToDiamond(num1, num2, num3) {
    const friend1GemPower = 21;
    const friend2GemPower = 32;
    const friend3GemPower = 43;
    const friend1Diamond = num1 * friend1GemPower;
    const friend2Diamond = num2 * friend2GemPower;
    const friend3Diamond = num3 * friend3GemPower;
    const totalDiamond = friend1Diamond + friend2Diamond + friend3Diamond;
    if (totalDiamond >= 1000 * 2) {
        const restDiamond = totalDiamond - 2000;
        return restDiamond;
    }
    else {

        return totalDiamond;
    }

}
const gems = gemsToDiamond();
console.log(gems);