const { readFileSync, writeFileSync } = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

// console.log(first, second);

//node automatically create a file or overrides existing content/files by default OR we can append to the file with {flag: 'a} as a third parameter
writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
);

console.log('done with this task');
console.log('starting the next task');
