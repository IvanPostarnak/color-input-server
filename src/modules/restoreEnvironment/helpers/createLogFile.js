const path = require('path');
const fsPromise = require('fs/promises');

async function createLogFile(root, dirName, logBasisName) {
  let date = new Date();
  let finalLogName = `${logBasisName}-${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;

  let finalPath = path.join(root, dirName, finalLogName);
  let logEntryString = `FILE ${finalLogName} was created at ${date.getHours()}:${date.getMinutes()} o'clock`;
  
  return fsPromise.writeFile(finalPath, logEntryString, { overwrite: false })
  .then(() => {
    return true;
  })
  .catch((err) => {
    return err.message;
  })
}

module.exports = {
  createLogFile: createLogFile
}