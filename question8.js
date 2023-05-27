// Question 8: Write a function that sums squares of numbers in list that may contain more lists

// solution through recursion + for loop
function SumSquares(arr){
  if(arr.length === 0) return 0
  let count = 0

  for(let i=0; i< arr.length; i++){
    if(Array.isArray(arr[i])){
      count = count + SumSquares(arr[i])
    }
    else if(typeof arr[i] === 'number'){
      count += arr[i]**2 
    }
  }
  return count
}

// solution through recursion
// function SumSquares(arr){
//   if(arr.length===0) return 0
  
//   let count = 0
//   const num = arr.shift()

//   if(typeof num === 'number') {
//     count = count + num**2
//   }
//   else if(Array.isArray(num)){
//     count= count + SumSquares(num)
//   }
  
//   return count + SumSquares(arr)
  
// }

let arr = [1,2,3]; 
console.log(SumSquares(arr)); // 1 + 4 + 9 = 14

arr = [[1,2],3]; 
console.log(SumSquares(arr)); // 1 + 4 + 9 = 14

arr = [[[[[[[[[1]]]]]]]]] 
console.log(SumSquares(arr)); // 1 = 1

arr = [10,[[10],10],[10]] 
console.log(SumSquares(arr)); // 100 + 100 + 100 + 100 = 400