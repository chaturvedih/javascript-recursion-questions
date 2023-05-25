// Question 2: Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

function power(base, exp){
  if(exp === 0) return 1

  return base * power(base, exp - 1)
}

console.log(power(3,3))