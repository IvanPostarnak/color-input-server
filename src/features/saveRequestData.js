const path = require('path');
const { saveCombinations, saveIssues } = require('./../modules/txtDatabase/txtDatabase');
const { writeLog } = require('./../modules/serverLog/serverLog');

function saveRequestData(dataString) {
  const SAVE_DATA_JS = path.basename(__filename);
  writeLog(`enter 'saveRequestData' function`, SAVE_DATA_JS);
  writeLog(`dataString : ${dataString}`, SAVE_DATA_JS);

  let requestDataObject;
  try {
    requestDataObject = JSON.parse(dataString);
  } catch (err) {
    console.error(`Error: ${err.message} at 'saveRequestData.js' file`);
    writeLog(`Error: ${err.message}`, SAVE_DATA_JS);
    return false;
  }

  const combinationsArray = requestDataObject["combinations"];
  const combinationSaveStatus = saveCombinations(combinationsArray);
  writeLog(`combinationsArray : ${JSON.stringify(combinationsArray)}`, SAVE_DATA_JS);
  writeLog(`combinationSaveStatus : ${JSON.stringify(combinationSaveStatus)}`, SAVE_DATA_JS);

  const issuesArray = requestDataObject["issues"];
  const issueSaveStatus = saveIssues(issuesArray);
  writeLog(`issuesArray : ${JSON.stringify(issuesArray)}`, SAVE_DATA_JS);
  writeLog(`issueSaveStatus : ${JSON.stringify(issueSaveStatus)}`, SAVE_DATA_JS);
  
  writeLog(`quit 'saveRequestData' function`, SAVE_DATA_JS);
  return combinationSaveStatus === true && issueSaveStatus === true;
}

module.exports = saveRequestData;