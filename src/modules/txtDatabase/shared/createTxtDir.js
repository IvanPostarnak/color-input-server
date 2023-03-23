const { TXT_DB_DIR_URL } = require('./../constants/txtConstants').txtDatabaseURLs;
const fs = require('fs');

function createTxtDir() {
  if (fs.existsSync(TXT_DB_DIR_URL) === false) {
    try {
      fs.mkdirSync(TXT_DB_DIR_URL);
      return true;

    } catch (err) {
      return err.code;

    }
  } else {
    return false;

  }
}

module.exports = createTxtDir;