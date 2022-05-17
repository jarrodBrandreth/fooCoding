//STRING AND ARRAY CHALLENGE

//Part1
/*
  let myString = "hello,this,is,a,difficult,to,read,sentence";
  1.1 Add the string to your file and log it.
  1.2 Log the length of myString.
  1.3 The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces.
  1.4 Log myString to see if you succeeded.
*/

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString); //output hello,this,is,a,difficult,to,read,sentence
console.log(myString.length); // 42

//String is immutable so we are using replaceAll method and re assigning the result to myString
myString = myString.replaceAll(',', ' '); 
console.log(myString); //output hello this is a difficult to read sentence





