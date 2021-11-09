const fs = require('fs');
const path = require('path');
const { readdir } = require('fs/promises');
const { mkdir } = require('fs/promises');
const { copyFile } = require('fs/promises');

const files = path.join(__dirname, 'files');
const filesCopy = path.join(__dirname, 'files-copy');

async function copyFolder() {
  try {
    await mkdir(filesCopy, { recursive: true });

    const readDir = await readdir(files, { withFileTypes: true });

    for(const file of readDir) {      
      await copyFile(path.join(files, file.name), path.join(filesCopy, file.name));
    }
  } 
  catch(err) {
    console.error(err);
  }
}
copyFolder();

async function removeFile() {
  const readDir = await readdir(filesCopy, { withFileTypes: true });
  for(const file of readDir) {
   if(!file.name.includes(files)) fs.unlink(path.join(filesCopy, file.name), (err) => {
      if(err) console.log(err);
    });
  }
}
removeFile();
