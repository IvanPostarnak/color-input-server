const { TXT_DB_CC_FILE_URL } = require('./../constants/txtConstants').txtDatabaseURLs;
const fs = require('fs');

function writeColorCombination(colorCombinationString) {
  try {
    fs.appendFileSync(TXT_DB_CC_FILE_URL, colorCombinationString);
    return true;
    
  } catch (err) {
    return err.message;

  }
}

module.exports = writeColorCombination;