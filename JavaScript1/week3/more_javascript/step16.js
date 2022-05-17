// MORE JAVASCRIPT

/*
  16.Take a look at the following code:
      let o1 = { foo: "bar" };
      let o2 = { foo: "bar" };
      let o3 = o2;
    Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).
    Does the order that you assign (o3 = o2 or o2 = o3) matter?  
*/

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

/* Here we add a new property to o2 object */
o2.newProp = "added new property to o2";

/* If we console.log o3 now we can see if o3 also gets that new property */
console.log(o3);
console.log(o3.hasOwnProperty("newProp")); //this will print true to the console

/* It does contain the newProp we assigned to o2 because when we declared o3 = o2 we are pointing them
to the same reference in memory not making a copy. So a change is applied to both */

/* Here add a property to o1 and see if it changes o3 */
o1.somethingNew = "added new property to o1";

/* We can console.log o3.hasOwnProperty("somethingNew") to see if o3 also got that somethingNew property
  if it did it will print true, if not it will print false
*/
console.log(o3.hasOwnProperty("somethingNew")); // prints false to the console

// Does the order that you assign (o3 = o2 or o2 = o3) matter?

/*
 Not sure if i completely understand the question but if o3 was already declared like this: 

 let o2 = { foo: "bar" };
  let o3 = {};
  o2 = o3

and o2 was re-assigned like this then the variable o2 would point to the same reference as o3 now
and not the first assignment of the object with foo property.  

console.log(o2) // prints {}

*/