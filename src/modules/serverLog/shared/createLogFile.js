const { LOG_FILE_URL } = require('./../constants/logConstants').logURLs;
const { LOG_FILE_NAME } = require('./../constants/logConstants').logNames;
const fs = require('fs');

function createLogFile() {
  const date = new Date();
  let logEntryString = `FILE '${LOG_FILE_NAME}' was created at ${date.getHours()}:${date.getMinutes()}`;

  if (fs.existsSync(LOG_FILE_URL) === false) {
    try {
      fs.writeFileSync(LOG_FILE_URL, logEntryString, (err) => {});
      return true;

    } catch (errWrite) {
      return errWrite.code;

    }
  } else {
    return false;
    
  }
}

module.exports = createLogFile;