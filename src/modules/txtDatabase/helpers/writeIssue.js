const { TXT_DB_CC_FILE_URL } = require('./../constants/txtConstants').txtDatabaseURLs;
const fs = require('fs');

function writeIssue(issueString) {
  try {
    fs.writeFileSync(TXT_DB_CC_FILE_URL, issueString);
    return true;
    
  } catch (err) {
    return err.message;

  }
}

module.exports = writeIssue;