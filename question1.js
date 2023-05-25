// Question 1: Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

let num = 4
function sumOfNumber(num){
  if(num === 1) return 1

  return num + sumOfNumber(num - 1)
}

console.log(sumOfNumber(num))
