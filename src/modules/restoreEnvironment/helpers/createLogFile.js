const fs = require('fs');

function createLogFile(logURL, logFileName) {
  const date = new Date();
  let logEntryString = `FILE '${logFileName}' was created at ${date.getHours()}:${date.getMinutes()}`;

  try {
    fs.access(logURL, fs.constants.R_OK);
    return false;

  } catch (errAccess) {

    try {
      fs.writeFile(logURL, logEntryString, (err) => {});
      return true;

    } catch (errWrite) {
      return errWrite.code;

    }
  }
}

module.exports = createLogFile;