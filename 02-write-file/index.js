const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

const fileName = path.join(__dirname, 'text.txt');

const writeableStream = fs.createWriteStream(fileName, 'utf8');

console.log('Hello! What do you think about Node.js?');

rl.on('line', (input) => {

  if(input === 'exit') { 
    rl.close();
    console.log('Good bye!');
  } 
  else writeableStream.write(`${input} \n`);
});

rl.on('SIGINT', () => {

  rl.close();
  console.log('Good bye!');
});