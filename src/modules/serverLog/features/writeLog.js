const fs = require('fs');
const { LOG_FILE_URL } = require('./../constants/logConstants').logURLs;
const getDataType = require('./../helpers/getDataType');
const beautifyData = require('./../helpers/beautifyData');

function writeLog(data, caller) {
  
  const typeofData = getDataType(data);
  let dataString;

  if (typeofData != 'string') {
    dataString = JSON.stringify(data);
  }

  let beautyData = beautifyData(data);
  beautyData = "\n" + caller + ' : ' + beautyData;

  if (fs.existsSync(LOG_FILE_URL) === true) {
    fs.appendFileSync(LOG_FILE_URL, beautyData, (err) => {
      console.error(`Error: ${err.message} at 'writeLog.js' file`);
    });
  } else {
    console.error(`'${LOG_FILE_URL}' does not exist! (at 'writeLog.js)`);

  }
}

module.exports = writeLog;