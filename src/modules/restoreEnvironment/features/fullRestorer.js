const { LOGS_DIR_NAME, LOG_FILE_BASIS_NAME } = require('./../../serverLog/serverLog').logNames;
const { createLogsDir, createLogFile } = require('./../../serverLog/serverLog');

function fullRestorer() {
  // object to save all the results of restoring environments
  const restoreStatusesObject = {};
  
  restoreStatusesObject[LOGS_DIR_NAME] = createLogsDir();
  restoreStatusesObject[LOG_FILE_BASIS_NAME] = createLogFile();

  return restoreStatusesObject;
}

module.exports = fullRestorer;