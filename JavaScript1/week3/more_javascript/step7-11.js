//MORE JAVASCRIPT

/*
  7.Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
*/

const vehicleList = [
  "motorbike",
  "caravan",
  "truck",
  "bicycle",
  "unicycle",
  "scooter",
];

// 8. How do you get the third element from that list?
const thirdVehicle = vehicleList[2];
console.log(thirdVehicle); //outputs third vehicle which is truck now

/*
  9. Change the function vehicle to use the list of question 7.
   So that vehicle("green", 3, 1) prints "a green new bike".
*/
/*
   if type is greater than last index of vehicleList, not an interger or less < 0 give default type = 0
   checks if age is between 0-1 then its "new" else its "old"
*/

function vehicle(color, type, age) {
  if (type > vehicleList.length - 1 || !Number.isInteger(type) || type < 0) {
    type = 0;
  }

  age >= 0 && age <= 1 ? (age = "new") : (age = "used");

  return `a ${color} ${age} ${vehicleList[type]}`;
}

//TESTS
console.log(vehicle("gold", 5, 0.4)); //outputs a gold new scooter

console.log(vehicle("blue", 4, 0)); //outputs a blue new unicycle

console.log(vehicle("green", 2, 6)); //outputs a green used truck

console.log(vehicle("red", 22, 1)); //outputs a red new motorbike

console.log(vehicle("red", true, 1)); //outputs a red new motorbike

console.log(vehicle("red", NaN, 1)); //outputs a red new motorbike

/*
  10.Use the list of vehicles to write an advertisement. So that it prints something like:
   "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

   Hint, the output should be correct English with all the punctuation in place (that's the challenge).
    So plurals for the vehicle types, commas followed by a single space, the word and to replace the final comma and closed off by a period.
*/

/*
  loops through given array and adds to advertisement string if its the last item it adds the period
  else it adds the comma. after loop complete it returns advertisement string from the function 
*/
function createAdvertisement(array) {
  let advertisement = "Amazing Joe's Garage, we service";
  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 2) {
      advertisement += ` ${array[i]}s and ${array[i + 1]}s.`;
      break;
    } else {
      advertisement += ` ${array[i]}s,`;
    }
  }
  return advertisement;
}

//TEST
console.log(vehicleList);
console.log(createAdvertisement(vehicleList));
//outputs Amazing Joe's Garage, we service motorbikes, caravans, trucks, bicycles, unicycles and scooters.

/*
  11.What if you add one more vehicle to the list, can you have that added to the advertisement
   without changing the code for question 10?
*/
// YES, SHOWN BELOW

vehicleList.push("spaceship"); //adds new vehicle to end of the list

console.log(createAdvertisement(vehicleList));
//outputs Amazing Joe's Garage, we service motorbikes, caravans, trucks, bicycles, unicycles, scooters, spaceships.


