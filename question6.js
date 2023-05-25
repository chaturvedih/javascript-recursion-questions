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
  Object.keys(nestedObject).forEach(elem =>{
    if(typeof nestedObject[elem] === 'object'){
      return  contains(nestedObject[elem], val)
    }
    return nestedObject[elem] === val
  })
}