const { TXT_DB_ISSUES_FILE_URL } = require('./../constants/txtConstants').txtDatabaseURLs;
const fs = require('fs');

function createIssuesTxtFile() {
  if (fs.existsSync(TXT_DB_ISSUES_FILE_URL) === false) {
    try {
      fs.writeFileSync(TXT_DB_ISSUES_FILE_URL, '', (err) => {});
      return true;

    } catch (errWrite) {
      return errWrite.code;

    }
  } else {
    return false;
    
  }
}

module.exports = createIssuesTxtFile;