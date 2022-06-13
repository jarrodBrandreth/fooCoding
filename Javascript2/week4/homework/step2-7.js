'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here
/*
 function f1 
 - x hold the value of 9. So in the function when it gets passed x it uses that value and returns a result of that value plus 1. So f1(x) is equal to 10.
 - x remains unchanged though because the function has not reassigned x but rather just used the value that is assigned to it.
 
 function f2
 - y holds a reference to an object. So when f2 gets passed y it gets passed the object itself and thus gets changed.
 */
