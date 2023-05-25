// Question 5: Write a function called productOfArray which takes in an array of numbers and returns the product of them all

arr = [1,2,3,4]
function productOfArray(arr){
  if(arr.length === 0) return 1
  const num = arr.shift()
  return num * productOfArray(arr)
}

console.log(productOfArray(arr))