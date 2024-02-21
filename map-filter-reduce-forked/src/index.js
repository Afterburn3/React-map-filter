// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.

// function double(x) {
//   return x * 2;
// }

// const newNumbers = numbers.map(double);
// console.log(newNumbers);
//Filter - Create a new array by keeping the items that return true.
// const newNumber = numbers.filter((num) => {
//   return num > 10;
// });

// console.log(newNumber);

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.

import emojipedia from "./emojipedia";

const newMeaning = emojipedia.map((array) => {
  return array.meaning.substring(0, 100);
});

console.log(newMeaning);

// console.log(newMeaning.substring(1, 100));
