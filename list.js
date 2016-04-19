var myList = [];
myList[0] = 'chicken';
myList.push(3.2);
myList.push(true);
myList.push(['bob', 'bill']);

// length of arrays
var len = myList.length;
console.log('myList is %j elements long', len);

// index of an element in the array
var incChk = myList.indexOf('chicken');
console.log('chicken is element %j in myList', incChk);

// iterate through the array
myList.forEach(logArrayElements);

function logArrayElements(element, index, array) {
  console.log('myList[' + index + '] = ' + element);
}

// alpha sort of array 10 will appear before 3.2 in the sorted output
myList.push(10);
console.log(myList.sort());

// numeric sort ascending
console.log(myList.sort(sortNumber));

function sortNumber(a,b) {
    return a - b;
}