'use strict';

const threeFive = (startIndex, stopIndex, threeCallback, fiveCallback) => {
  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
  
  numbers.forEach(num => {
    if (num % 3 === 0) threeCallback(num);
    if (num % 5 === 0) fiveCallback(num);
  });
};

const sayThree = number => {
  console.log(number + 'divisible by three');
};

const sayFive = number => {
  console.log(number + 'divisible by five');
};

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
