// Question 3: Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that 
// number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.

function factorial(num){
  if(num === 1) return 1

  return num * factorial(num - 1)
}

console.log(factorial(5))