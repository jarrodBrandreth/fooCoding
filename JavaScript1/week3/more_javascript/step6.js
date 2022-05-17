//MORE JAVASCRIPT

/*
  6.Create a function called vehicle, like before, but takes another parameter called age,
   so that vehicle("blue", 1, 5) prints 'a blue used car' 
*/

function vehicle(color, code, age) {
  if (code !== 1 && code !== 2) {
    return "invalid code argument enter 1 or 2 for second argument";
  }

  age === 0 ? (age = "new") : (age = "used"); //checks age and if 0 its a new car if > than 0 consider it used

  if (code === 1) {
    return `a ${age} ${color} car`;
  } else {
    return `a ${age} ${color} motorbike`;
  }
}

//TESTS
console.log(vehicle("yellow", 2, 2));
console.log(vehicle("black", 1, 0));
console.log(vehicle("blue", 4, 2));

