// Question 9: The function should return an array containing repetitions of the number argument. 
// For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.


function Replicate(rep, num){
  if(rep<=0) return []

    rep = rep-1
    return [num].concat(Replicate(rep, num))
}

console.log(Replicate(3, 5)) // [5, 5, 5]
console.log(Replicate(1, 69)) // [69]
console.log(Replicate(-2, 6)) // []