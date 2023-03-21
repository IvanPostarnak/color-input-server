const fsPromise = require('fs/promises');

async function createLogsDir(dirURL) {
  return fsPromise.mkdir(dirURL)
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