const path = require('path');
const fsPromise = require('fs/promises');

async function createLogsDir(name) {
  let finalPath = path.resolve('.', name);
  
  return fsPromise.mkdir(finalPath)
  .then(() => {
    return true;
  })
  .catch((err) => {
    return err.message;
  })
}

module.exports = {
  createLogsDir: createLogsDir
}