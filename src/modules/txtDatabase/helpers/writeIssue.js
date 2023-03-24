const { TXT_DB_ISSUES_FILE_URL } = require('./../constants/txtConstants').txtDatabaseURLs;
const fs = require('fs');

function writeIssue(issueString) {
  try {
    fs.appendFileSync(TXT_DB_ISSUES_FILE_URL, issueString);
    return true;
    
  } catch (err) {
    return err.message;

  }
}

module.exports = writeIssue;