//MORE JAVACRIPT

/*
  15.Write some code to test two arrays for equality using == and ===. Test the following:
    let x = [1, 2, 3];
    let y = [1, 2, 3];
    let z = y;
    What do you think will happen with x == y, x === y and z == y and z == x? Prove it! 
*/
console.log("I think x == y will be true and x === y will be false");
console.log("I think z == y and z == x will both be true");

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(x == y ? true : false); //prints false
console.log(x === y ? true : false); //prints false
console.log(z == y ? true : false); //prints true
console.log(z == x ? true : false); //prints false

/*
  I was wrong equality operator when used on arrays is false even when they have the same values.
  Only is true when they point to the same reference
*/

// BONUS PRACTICE wrote a function to check if two arrays have the same order and values

/*
  function explanation
  -declares a variable that they are the same which we will alter if test fails
  -first checks length of array if true loops through to check indexes,
   if false changes variable to false and exits function
  - next checks each index on both arrays if one doesn't match changes variable to false and exits function
  - if loop completes returns they are the same
*/
function checkArrays(arr1, arr2) {
  let isSame = true;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        continue;
      } else {
        isSame = false;
        return `These arrays index and values are the same: ${isSame}`;
      }
    }
  } else {
    isSame = false;
    return `These arrays index and values are the same: ${isSame}`;
  }
  return `These arrays index and values are the same: ${isSame}`;
}

//TESTS
console.log(checkArrays(x, y)); // should print true 
console.log(checkArrays(x, [1, 2, 3])); // should print true
console.log(checkArrays(x, [1, 2, 4])); // should print false