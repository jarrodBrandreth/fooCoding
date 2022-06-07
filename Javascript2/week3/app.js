'use strict';
/*
  STEP 1
  -1.1 Say you would like to write a program that doubles the odd numbers in an array and throws away the even numbers.

Your solution could be something like this:

function doubleOddNumbers(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      newNumbers.push(numbers[i] * 2);
    }
  }
  return newNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers)); // ==> [2, 6]
Rewrite the above doubleOddNumbers function using map and filter; don't forget to use =>.
*/

const doubleOddNumbers = (arr) => arr.filter((num) => num % 2 !== 0).map((num) => num * 2);
const myNumbers = [1, 2, 3, 4];

/*
  -1.2 
*/
const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180,
  },
  {
    name: 'Some web development',
    duration: 120,
  },
  {
    name: 'Fix homework for class10',
    duration: 20,
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0,
  },
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 1.0,
  },
  {
    name: 'Some more web development',
    duration: 180,
  },
  {
    name: 'Staring out the window',
    duration: 10,
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0,
  },
  {
    name: 'Look at application assignments new students',
    duration: 40,
  },
];

const maartjesTasks = monday.concat(tuesday);
const maartjesHourlyRate = 20;

const computeEarnings = (tasks, hourlyRate) => {
  const money = tasks
    .map((task) => task.duration / 60)
    .filter((hours) => hours >= 2)
    .reduce((earnings, hours) => earnings + hours * hourlyRate, 0);

  return `Maartje has earned €${money.toFixed(2)}`;
};

console.log(computeEarnings(maartjesTasks, maartjesHourlyRate));
