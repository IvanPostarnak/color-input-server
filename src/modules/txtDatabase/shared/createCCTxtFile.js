const { TXT_DB_CC_FILE_URL } = require('./../constants/txtConstants').txtDatabaseURLs;
const fs = require('fs');

function createCCTxtFile() {
  if (fs.existsSync(TXT_DB_CC_FILE_URL) === false) {
    try {
      fs.writeFileSync(TXT_DB_CC_FILE_URL, '');
      return true;

    } catch (errWrite) {
      return errWrite.code;

    }
  } else {
    return false;
    
  }
}

module.exports = createCCTxtFile;