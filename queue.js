var myQueue = ['find dynamite'];

// contents of our queue
console.log('1');
myQueue.forEach(logArrayElements);

// add an element to the queue
myQueue.push('light fuse');
console.log('2');
myQueue.forEach(logArrayElements);

// ok, we found dynamite
myQueue.shift(0);
console.log('3');
myQueue.forEach(logArrayElements);

// let's do it! and remove the task from the queue
myQueue.shift(0);
console.log('4');
myQueue.forEach(logArrayElements);

// oh crap, what do we do??
myQueue.push('RUN!!');
console.log('5');
myQueue.forEach(logArrayElements);
myQueue.shift(0);
console.log('6');
myQueue.forEach(logArrayElements);
// log out our array
function logArrayElements(element, index, array) {
  console.log('myList[' + index + '] = ' + element);
}