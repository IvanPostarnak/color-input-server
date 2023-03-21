const path = require('path');
const fsPromise = require('fs/promises');

async function createLogsDir(root, dirName) {
  let finalPath = path.join(root, dirName);
  
  return fsPromise.mkdir(finalPath)
  .then(() => {
    return true;
  })
  .catch((err) => {
    return err.code;
  })
}

module.exports = {
  createLogsDir: createLogsDir
}