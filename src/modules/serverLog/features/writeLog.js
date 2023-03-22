const fs = require('fs');
const { LOG_FILE_URL } = require('./../constants/logConstants').logURLs;
const logCounter = require('./../helpers/logCounter');
const getDataType = require('./../helpers/getDataType');
const beautifyData = require('./../helpers/beautifyData');

function writeLog(data, caller) {
  const { increment, getCount } = logCounter();
  
  const typeofData = getDataType(data);
  let dataString;

  if (typeofData != 'string') {
    dataString = JSON.stringify(data);
  }

  let beautyData = beautifyData(data);
  beautyData = "\n" + getCount() + ' : ' + caller + ' : ' + beautyData;

  if (fs.existsSync(LOG_FILE_URL) === true) {
    fs.appendFileSync(LOG_FILE_URL, beautyData, (err) => {
      console.error(`Error: ${err.message} at 'writeLog.js' file`);
    });
    increment();
  } else {
    console.error(`'${LOG_FILE_URL}' does not exist! (at 'writeLog.js)`);

  }
}

module.exports = writeLog;