//MORE JAVASCRIPT

/*
  4. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike.
  And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)
*/

/*
  -function takes the two arguments color and code(type of vehicle) only two types available
    1 for car 2 for motorbike.
  - then does first check if its either type 1 or 2, if not it console logs invalid code argument
    and instructs to enter 1 or 2 and stops executing function for an early exit.
  - if user entered 1 or 2 it prints the color entered and then either car or motorbike.   
*/

function vehicleType(color, code) {
  if (code !== 1 && code !== 2) {
    return "invalid code argument enter 1 or 2";
  }

  if (code === 1) {
    return `a ${color} car`;
  } else {
    return `a ${color} motorbike`;
  }
}

//tests
console.log(vehicleType("green", 3)); //logs result to console "invalid code argument enter 1 or 2"
console.log(vehicleType("red", 0)); //logs result to console "invalid code argument enter 1 or 2"
console.log(vehicleType("pink", 100)); //logs result to console "invalid code argument enter 1 or 2"
console.log(vehicleType("black", 1)); //logs result to console "a black car"
console.log(vehicleType("orange", 2)); //logs result to console "a orange motorbike"
