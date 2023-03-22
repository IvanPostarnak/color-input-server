const fs = require('fs');

function createLogsDir(dirURL) {

  try {
    fs.mkdir(dirURL, (err) => {});
    return true;

  } catch (err) {
    return err.code;

  }
}

module.exports = createLogsDir;