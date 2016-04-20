#!/usr/bin/env node

var program = require('commander');

function range(val) {
  return val.split('..').map(Number);
}

function numList(val) {
  return val.split(',').map(Number);
}

function list(val) {
  return val.split(',');
}

function collect(val, memo) {
  memo.push(val);
  return memo;
}

function increaseVerbosity(v, total) {
  return total + 1;
}

program
  .version('0.0.1')
  .usage('[options] <file ...>')
  .option('-a, --age <n>', 'Your age', parseInt)
  .option('-n, --name [value]', 'Your name')
  .parse(process.argv);

console.log('My Name is ' + program.name);
console.log('My age is %j', program.age - 5);
