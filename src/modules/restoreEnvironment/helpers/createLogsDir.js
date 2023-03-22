const fs = require('fs');

function createLogsDir(dirURL) {

  if (fs.existsSync(dirURL) === false) {
    try {
      fs.mkdir(dirURL, (err) => {});
      return true;

    } catch (err) {
      return err.code;

    }
  } else {
    return false;

  }
}

module.exports = createLogsDir;