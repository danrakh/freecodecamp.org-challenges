/*
Specification
1. Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
2. Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

Test Cases
#1 dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
#2 dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1]. - arr.filter(func) doesn't work in this case b/c it returns [1,1]
#3 dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
#4 dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
#5 dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
#6 dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2]. - arr.filter(func) doesn't work in this case b/c it returns [3,9]

Solution
For #2 and #6 simple arr.filter(func) doesn't work, because filter function doesn't stop after first occurance so we need to findIndex of first occurance.
In case of arr not matching func criteria findIndex returns -1, so in that specific case our function should return empty array.
*/

// function dropElements(arr, func) {
//     let indexFinder = (element) => func(element);
//     let seekedIndex = arr.findIndex(indexFinder);
//     let modArr = [];
//     if (seekedIndex != -1) {
//         modArr = arr.slice(seekedIndex)
//     } else {
//         modArr = [];
//     }
//     return modArr;
//   }
  
//   console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));

function dropElements(arr, func) {
    return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length);
  }
  
  dropElements([1, 2, 3, 4], function(n) {return n > 5;});