const fs = require('fs');

function createLogFile(logURL, logFileName) {
  const date = new Date();
  let logEntryString = `FILE '${logFileName}' was created at ${date.getHours()}:${date.getMinutes()}`;

  if (fs.existsSync(logURL) === false) {
    try {
      fs.writeFile(logURL, logEntryString, (err) => {});
      return true;

    } catch (errWrite) {
      return errWrite.code;

    }
  } else {
    return false;
    
  }
}

module.exports = createLogFile;