//Question 7: Given a multi-dimensional integer array, return the total number of integers stored inside this array

const arr = [[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]
// let count = 0

// By using recurssion with for loop

// function multidimensionalArray(arr){
//   for(let i=0; i<arr.length; i++){
//     if(arr[i].length && Array.isArray(arr[i])){
//       multidimensionalArray(arr[i])
//     } else if(typeof arr[i] === 'number') count++
//   }

// }

// By using recurssion only
function multidimensionalArray(arr){
  let count = 0
  if(arr.length === 0) return 0
  const num = arr.shift()

  if(num.length>0 && Array.isArray(num)){
    count += multidimensionalArray(num)
  }
  else if(typeof num === 'number') {
    count += 1
  }

  return count + multidimensionalArray(arr)

  }


console.log(multidimensionalArray(arr))