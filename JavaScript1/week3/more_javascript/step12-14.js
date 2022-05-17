//MORE JAVASCRIPT

/*
  12.Create an empty object.
*/
const emptyObj = {};

/*
  13.Create an object that contains the teachers that you have had so far for the different modules.
*/

const fooCoding = {
  teachers: ["Claudiu", "Seif", "Sahin"],
};
console.log(fooCoding); //object { teachers: Array(3) with values }
console.log(fooCoding.teachers); // Array(3) with values

/*
  14.Add a property to the object you just created that contains the languages that they have taught you.
*/

//example using bracket notation fooCoding["languages taught"] = ["html5","css","javascript"];

fooCoding.languages = ["html5", "css", "javascript"];

console.log(fooCoding); //object teachers: Array(3), languages: Array(3)
console.log(fooCoding.languages); //["html5","css","javascript"]
