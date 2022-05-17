// MORE JAVASCRIPT

/*
  17.What does the following code return? (And why?)
*/

let bar = 42;
typeof typeof bar;

/*
  typeof typeof bar; would return 'string'. This is because typeof returns a string value of the type.
  ex typeof (some object here) would return a string value of "object".
  so here we have typeof bar returning the string "number".
  then we have typeof being called on that result which would return the string "string".

*/

let barType = typeof bar; // here we are storing the result of typeof bar

console.log(barType); // as you can see it logs the string "number" to the console

/*
  as you can see in this statement below it does not increment barType as typeof returns a string of "number"
  and not an actual number.
  Here it converts the actual number (1 in this case) to a string and appends it, resulting 
  in the output string of "number1".
*/
console.log(barType + 1); //outputs number1

console.log(typeof barType); //So here we get the result of typeof typeof bar which is "string".
console.log(typeof typeof bar); 
