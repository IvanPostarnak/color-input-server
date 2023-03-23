const { DB_ROOT_DIR_URL } = require('../constants/txtConstants').txtDatabaseURLs;
const fs = require('fs');

function createDatabaseDir() {
  if (fs.existsSync(DB_ROOT_DIR_URL) === false) {
    try {
      fs.mkdir(DB_ROOT_DIR_URL, (err) => {});
      return true;

    } catch (err) {
      return err.code;

    }
  } else {
    return false;

  }
}

module.exports = createDatabaseDir;