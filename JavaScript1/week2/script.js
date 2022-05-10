
    // Part 1
    //1. Write a console.log statement saying "Hello World!" for each language that you know.
    console.log('Hello World'); // English
    console.log('Hej världen'); // Swedish

    //Part 2
    /*
      2. Consider the following code: console.log('I'm awesome');
      Copy the code in your .js file and run it. You will see that you will get a SyntaxError. 
      Find a solution for this error. Hint: read the error message carefully, it also gives an indication of where the problem is.
    */
    console.log("I'm awesome"); //output I'm awesome
    console.log('I\'m awesome'); //output I'm awesome
    console.log(`I'm awesome`); //output I'm awesome

    //Part 3
    /*
      3. Declare a variable x and initialize it with an integer, using these exact steps:
      3.1 First, declare your variable x (do not initialize it yet).
      3.2 Add a console.log statement that explains in words what you think the value of x is, like in this example:
      3.3 Add a console.log statement that logs the value of x.
      3.4 Now initialize your variable x with an integer.
      3.5 Next, add a console.log statement that explains what you think the value of x is.
      3.6 Add a console.log statement that logs the value of x.
    */
    let x;
    console.log('The value of x will be: undefined');
    console.log(x); //expected output undefined
    x = 99;
    console.log('The value of x will be: 99');
    console.log(x); //output 99
    
    //Part 4
    /* 
      4. Declare a variable y and assign a string to it.
      4.1 Write a console.log statement in which you explain in words what you think the value of the string is.
      4.2 Now console.log the variable y.
      4.3 Now assign a new string to the variable y.
      4.4 Just like what you did before write a console.log statement that explains in words what you think will be logged to the console.
      4.5 Now console.log y again.
    */
    let y = 'fooCoding';
    console.log("the value of y is: 'fooCoding' ");
    y = ' a new string';
    console.log("the value of y is: ' a new string' ");
    console.log(y);

    //Part5
    /*
      5. How do you round the number 7.25, to the nearest integer (i.e., whole number)?
      5.1 Declare a variable z and assign the number 7.25 to it.
      5.2 console.log z.
      5.3 Declare another variable a that has the value of z but rounded to the nearest integer.
      5.4 console.log a.
      5.5 So now we have z and a find a way to compare the two values and store the highest of the two in a new variable.
      5.6 console.log the highest value.
    */ 
    let z = 7.25;
    console.log(z);
    let a = Math.round(z); //rounds to the nearest integer 
    console.log(a); //output 7
    let highestOfTwo = z > a? z : a; // ternary operator returns highest of two numbers
    console.log(highestOfTwo); //ouputs 7.25
    
    //Part6
    /*
      6.1 Declare an empty array. Make sure that the name you choose indicates 'plurality', because an array is capable of containing more than one element.
      6.2 Write a console.log statement that explains in words what you think the value of the array is.
      6.3 console.log your array.
      6.4 Create an array that has your favorite animals inside (see if you can find a good name that exactly describes what this variable will hold).
      6.5 Log your array.
      6.6 Add a statement that adds Daan's favorite animal ('baby pig') to the existing array.
      6.7 Log your new array!
    */ 
    let contents = [];
    console.log("I think value of contents array is [] an empty array");
    console.log(contents);
    let myFavouriteAnimals = ['penguin','hedgehog','koala','elephant','lion'];
    console.log(myFavouriteAnimals);
    myFavouriteAnimals.push('baby pig'); //appends 'baby pig' to the end of the array 
    console.log(myFavouriteAnimals); //output is 'penguin','hedgehog','koala','elephant','lion', 'baby pig'

    //Part7
    /*
      Let's consider the following string: let myString = "this is a test".
      7.1 Add the string to your file and console.log it.
      7.2 Find a way to get the length of myString.
      7.3 console.log the length of myString.
    */
    let myString = "this is a test";
    console.log(myString); 
    console.log(myString.length); //shows length of string , this case is 14

    //Part8
    /*
      8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.
      8.1 First declare at least four variables and assign them different data types.
      8.2 For each variable write a console.log statement that logs the value
      8.3 Now write a console.log statement wherein you first explain in words what you think the type of your variables is.
      8.4 Now use typeof to log the actual type of your variables.
      8.5 Now compare the types of your different variables with one another.
      8.6 Make sure to also show a message when the variables you are comparing are not the same type.
    */
    let iAmNum = 5;
    let iAmString = " :) ";
    let iAmBoolean = true;
    let iAmArray = ['I','am','an','array'];
    console.log('The value of iAmNum is: ' + iAmNum);
    console.log('The value of iAmString is: ' + iAmString );
    console.log('The value of iAmBoolean is: ' + iAmBoolean );
    console.log('The value of iAmArray is: ' + iAmArray );

    console.log("I think typeof iAmNum is type: number");
    console.log(typeof iAmNum);
    console.log("I think typeof iAmString is type: string");
    console.log(typeof iAmString);
    console.log("I think typeof iAmBoolean is type: boolean");
    console.log(typeof iAmBoolean);
    console.log("I think typeof iAmArray is type: object");
    console.log(typeof iAmArray);

    /*
    function - takes two arguments and compares if they are of same type
    returns the result and the types
    */
    function typeCompare(type1,type2) {
      if (typeof type1 === typeof type2) {
        return('SAME TYPE ' + typeof type1)
      } else {
        return(`DIFFERENT TYPES, type 1 is ${typeof type1} and type 2 is ${typeof type2}`);
      }
    }

    console.log(typeCompare(iAmNum,iAmString)); //expected output different types

    console.log(typeCompare(iAmBoolean,iAmArray)); //expected output different types

    console.log(typeCompare(iAmString,'fooCafe')); //expected output same type


    //Part9
    /*
      9. If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
      9.1 Add at least 3 console.log statements in which you show that you understand what % does.
    */

    // named newX because x is already declared in Part3
    let newX = 7;
    newX = newX % 3;
    console.log(newX); // output 1;

    console.log( 25 % 50); //expected output 25
    console.log(50 % 25); //expected output 0
    console.log(45 % 43); //expected output 2
    

    //Part10
    //10.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.
    let multipleTypesArray = ['can you store multiple types in an array?',true , 5, ['an array', 'in a array'], { name: 'object in an array', type: 'object'}];
    console.log(multipleTypesArray); //outputs the array, no errors given

    /*10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?
      10.3 Add console.log statements to the above program in which you show that you understand the concepts (just like you've done in the above assignments).
    */
    let comparingInfinities = 6/0 === 10/0 ? "yes" : "no"; //returns yes if statement is true no if statement is false
    console.log(comparingInfinities); //prints yes to console   
      

    //BONUS FUN
    //Remainder Guess Calculator for html file
    const firstOperand = document.getElementById("first-operand");
    const secondOperand = document.getElementById("second-operand");
    const guessNum = document.getElementById("guess");
    const guessOutcome = document.getElementById("guess-outcome");
    const answer = document.getElementById("answer");
    const calculate = document.getElementById("calculate");

    //adds a click event and calculates remainder between two numbers with guess option
    calculate.addEventListener("click", () => {
      let remainder = firstOperand.value % secondOperand.value;
      let guess = guessNum.value;
      if (parseInt(guess) === remainder) {
        guessOutcome.innerText = "Great you guessed right!";
      } else if (guess !== remainder && guess !== "") {
        guessOutcome.innerText = "You guessed wrong, try again!";
      } else {
        guessOutcome.innerText = "N/A";
      }
      answer.innerText = remainder;
    });

    





 


