const { LOGS_DIR_NAME, LOG_FILE_BASIS_NAME } = require('./../../serverLog/serverLog').logNames;
const { createLogsDir, createLogFile } = require('./../../serverLog/serverLog');
const { DB_ROOT_DIR_NAME, TXT_DB_DIR_NAME, TXT_DB_CC_FILE_NAME_BASIS, TXT_DB_ISSUES_FILE_NAME_BASIS } = require('./../../txtDatabase/txtDatabase').txtDatabaseNames;
const { createDatabaseDir, createTxtDir, createColorCombinationsTxtFile, createIssuesTxtFile } = require('./../../txtDatabase/txtDatabase');

function fullRestorer() {
  // object to save all the results of restoring environments
  const restoreStatusesObject = {};
  
  try {
    restoreStatusesObject[LOGS_DIR_NAME] = createLogsDir();
    restoreStatusesObject[LOG_FILE_BASIS_NAME] = createLogFile();

    restoreStatusesObject[DB_ROOT_DIR_NAME] = createDatabaseDir();
    restoreStatusesObject[TXT_DB_DIR_NAME] = createTxtDir();
    restoreStatusesObject[TXT_DB_CC_FILE_NAME_BASIS] = createColorCombinationsTxtFile();
    restoreStatusesObject[TXT_DB_ISSUES_FILE_NAME_BASIS] = createIssuesTxtFile();

  } catch (error) {
    console.error(error);

  }

  return restoreStatusesObject;
}

module.exports = fullRestorer;