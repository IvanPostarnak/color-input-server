const fsPromise = require('fs/promises');

async function createLogFile(logURL, logFileName) {
  const date = new Date();
  let logEntryString = `FILE ${logFileName} was created at ${date.getHours()}:${date.getMinutes()}`;
  
  return fsPromise.writeFile(logURL, logEntryString, {
    overwrite: false
  })
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