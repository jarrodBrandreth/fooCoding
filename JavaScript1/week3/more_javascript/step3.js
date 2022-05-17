//MORE JAVASCRIPT 

/*
  3. Create an object and a function that takes the object as a parameter
   and prints out all of its properties and values.
*/

const myObj = { //object with three properties and a method
  name: "myObj",
  objective: "To learn programming",
  fun: true,
  sayHey: function() {
    console.log("Hello World");
  }, 
}

myObj.sayHey(); //prints "Hello World to console"
console.log(myObj.objective); //outputs "To learn programming" to the console

/*
  -function takes an object as an argument and first prints out string to show start of prop/value
  -then loops through objects props and prints out prop and paired value
  -then prints string to show end of prop/value
*/

function logObjectPropsValues(obj) {
  console.log("--the properties and value are--");
  for (const prop in obj) {
    console.log(prop + ": " + obj[prop]);
  }
  console.log("--print properties and values completed--");
} 

logObjectPropsValues(myObj); //calling function and passing it object to test

/* console output 

--the properties and value are-- 
name: myObj
objective: To learn programming
fun: true
sayHey: function() {
    console.log("Hello World");
  }
--print properties and values completed--

*/