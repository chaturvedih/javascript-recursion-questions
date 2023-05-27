// Question 6: Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.

let nestedObject = {
  data: {
      info: {
          stuff: {
              thing: {
                  moreStuff: {
                      magicNumber: 44,
                      something: 'foo2'
                  }
              }
          }
      }
  }
}

function contains(nestedObject, val){
  for(const value of Object.values(nestedObject)){
    if(typeof value === 'object'){
      return contains(value, val)
    }

    return value === val
  }
}

console.log(contains(nestedObject,44))