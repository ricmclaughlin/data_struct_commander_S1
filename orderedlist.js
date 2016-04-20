#!/usr/bin/env node

var myOrderedList = ['heat oven', 'bake cake', 'eat cake'];

// access element by index
var el1 = myOrderedList[1];
console.log('Element 1 in myOrderedList is %j', el1);

var elLast = myOrderedList[myOrderedList.length - 1];
console.log('The last element in myOrderedList is %j', elLast);

// find the index of an element
var indexOfEatCake = myOrderedList.findIndex(eatCake);

function eatCake(element) {
  return element === 'eat cake';
}
console.log('"eat cake" is element %j in the myOrderedList', indexOfEatCake);

// use a for loop to access elements by index (skip the last element in the ordered list)
for (var i = 0; i < myOrderedList.length - 1; i++) {
  console.log(myOrderedList[i]);
}
