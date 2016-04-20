#!/usr/bin/env node

var program = require('commander');
var rtnString = '';

function list(val) {
  return val.split(',').sort();
}

program
  .version('0.0.1')
  .usage('[options] <file ...>')
  .option('-s, --stringlist <items>', 'A list of strings', list)
  .parse(process.argv);

program.stringlist.forEach(function (element, index, array) {
  rtnString += element + ' ';
});

console.log(rtnString);
