const { ROOT, LOGS_DIR_NAME, LOG_FILE_BASIS_NAME } = require('./constants/envConstants');
const { createLogsDir } = require('./helpers/createLogsDir');
const { createLogFile } = require('./helpers/createLogFile');

async function restoreEnvironment() {
  // object to save all the results of restoring environments
  const restoreStatusesObject = {};

  restoreStatusesObject[LOGS_DIR_NAME] = await createLogsDir(ROOT, LOGS_DIR_NAME);
  restoreStatusesObject[LOG_FILE_BASIS_NAME] = await createLogFile(ROOT, LOGS_DIR_NAME, LOG_FILE_BASIS_NAME);

  return JSON.stringify(restoreStatusesObject);
}

module.exports = restoreEnvironment;