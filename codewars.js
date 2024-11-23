// 1. Given an array of integers, return a new array with each value doubled.
//[1, 2, 3] --> [2, 4, 6]
{
    function maps(x){
        return x.map(x => x * 2)
    }
    console.log(maps([1, 2, 3]));    
}

// 2. Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
//Input: [1, 5.2, 4, 0, -1]
//Output: 9.2
//Input: []
// Output: 0

{
    function sum (numbers) {
        return numbers.reduce((a, b) => a + b, 0)
    }

    console.log(sum([1, 5.2, 4, 0, -1]))
    console.log(sum([]))
}

//3. Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
//Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
// n= 5, m=5: 25
// n=-5, m=5:  0
{
    function paperwork(n, m) {
        if (n >= 0 && m >= 0){
            return n * m
        } else {
            return 0
        }
    }    

    console.log(paperwork(5, 5)); 
    console.log(paperwork(-5, 5)); 
}

// 4. Write a function which converts the input string to uppercase.
{
    function makeUpperCase(str) {
        return str.toUpperCase();
    }

    console.log(makeUpperCase('hello'));
}

// 5. This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
{
    function simpleMultiplication(number) {
        if (number % 2 === 0) {
            return number * 8
        } else {
            return number * 9
        }
    }

    console.log(simpleMultiplication(4))
    console.log(simpleMultiplication(7))
}