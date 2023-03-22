const fs = require('fs');
const { LOG_FILE_URL } = require('./../constants/logConstants').logURLs;
const logCounter = require('./../helpers/logCounter');
const getDataType = require('./../helpers/getDataType');
const makeGoodLooking = require('./../helpers/makeGoodLooking');

function writeLog(data, caller) {
  const { increment, getCount } = logCounter();
  
  const typeofData = getDataType(data);
  let dataString;

  if (typeofData != 'string') {
    dataString = JSON.stringify(data);
  }

  let goodLookingData = makeGoodLooking(data);
  goodLookingData = "\n" + getCount() + ' : ' + caller + ' : ' + goodLookingData;

  fs.appendFileSync(LOG_FILE_URL, goodLookingData, (err) => {
    console.log(`Error: ${err.message} at 'writeLog.js' file`);
  });
  increment();

}

module.exports = writeLog;