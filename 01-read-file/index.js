const fs = require('fs');
const path = require('path');

const fileName = path.join(__dirname, 'text.txt');

const readableStream = fs.createReadStream(fileName, 'utf8');

readableStream.on('data', (chunk) => console.log(chunk));
