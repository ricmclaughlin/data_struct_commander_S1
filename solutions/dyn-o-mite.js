#!/usr/bin/env node

var program = require('commander');

function list(val) {
  return val.split(',');
}

program
  .version('0.0.1')
  .usage('[options] <file ...>')
  .option('-q, --queue <items>', 'A queue of tasks', list)
  .parse(process.argv);

var queueOriginalLength = program.queue.length;
var currentTask, nextTasks;


for (var i = 0; i < queueOriginalLength; ++i) {
  currentTask = program.queue.shift(0);
  program.queue.length === 0 ? nextTasks = ' - next tasks: none' : nextTasks = ' - next tasks: ' + program.queue;
  console.log(currentTask + nextTasks);
}
