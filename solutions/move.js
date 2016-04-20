#!/usr/bin/env node

var program = require('commander');
var printString = 'First, I ';
var appendString = ', \n then I ';

function list(val) {
  return val.split(',');
}

program
  .version('0.0.1')
  .usage('[options] <file ...>')
  .option('-m, --movements <items>', 'A list of developmental movement stages', list)
  .parse(process.argv);

for (var i = 0; i < program.movements.length; ++i) {
  printString += program.movements[i];
  if (i === program.movements.length - 1) {
    appendString = '.';
  }
  printString += appendString;
}
console.log(printString);
