const fsPromise = require('fs/promises');

async function createLogFile(logURL, logFileName) {
  const date = new Date();
  let logEntryString = `FILE ${logFileName} was created at ${date.getHours()}:${date.getMinutes()}`;

  return fsPromise.access(logURL)
  .then(() => {
    return false;
  })
  .catch(() => {
    return fsPromise.writeFile(logURL, logEntryString)
    .then(() => {
      return true;
    })
    .catch((err) => {
      return err.message;
    })
  });
}

module.exports = {
  createLogFile: createLogFile
}