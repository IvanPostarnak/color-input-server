const { LOGS_DIR_URL } = require('./../constants/logConstants').logURLs;
const fs = require('fs');

function createLogsDir() {

  if (fs.existsSync(LOGS_DIR_URL) === false) {
    try {
      fs.mkdirSync(LOGS_DIR_URL);
      return true;

    } catch (err) {
      return err.code;

    }
  } else {
    return false;

  }
}

module.exports = createLogsDir;