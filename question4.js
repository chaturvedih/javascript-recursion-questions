//Question 4: Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function

arr = [1,2,1]
function callback(num){
  return num < 7
}

function allLessThenSeven(arr, cb){
  if(arr.length === 0) return true

  const num = arr.shift()
  let result = allLessThenSeven(arr,cb)
  return result && cb(num)
}

console.log(allLessThenSeven(arr, callback))