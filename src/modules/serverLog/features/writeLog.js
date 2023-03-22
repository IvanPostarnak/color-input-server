const fsPromise = require('fs/promises');
const { LOG_FILE_URL } = require('./../constants/logConstants');
const logCounter = require('./../helpers/logCounter');
const getDataType = require('./../helpers/getDataType');
const makeGoodLooking = require('./../helpers/makeGoodLooking');

async function writeLog(data, caller) {
  const { increment, getCount } = logCounter();

  const typeofData = getDataType(data);
  let dataString;

  if (typeofData != 'string') {
    dataString = JSON.stringify(data);
  }

  let goodLookingData = makeGoodLooking(data);
  goodLookingData = "\n" + getCount() + ' : ' + caller + ' : ' + goodLookingData;

  try {
    await fsPromise.appendFile(LOG_FILE_URL, goodLookingData);
    increment();

  } catch (err) {
    console.log(`Error: ${err.message} at 'writeLog.js' file`);
  }
}

module.exports = writeLog;