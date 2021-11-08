const fs = require('fs');
const path = require('path');
const { readdir } = require('fs/promises');

const fileName = path.join(__dirname, 'secret-folder');

async function readDir() {
  try {
    const files = await readdir(fileName, { withFileTypes: true });

    for(const file of files) {

      fs.stat(path.join(fileName, file.name), (err, stats) => {

        if(err) console.log(err);

        else if(!stats.isDirectory()) {
          const extname = path.extname(file.name);
          console.log(`${path.basename(file.name, extname)} - ${extname.slice(1)} - ${stats.size}b`);
        }
      });
    }
  } catch(err) {
    console.error(err);
  }
}
readDir();