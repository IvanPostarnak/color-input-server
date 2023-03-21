const { createLogsDir } = require('./features/createLogsDir');
const { createLogFile } = require('./features/createLogFile');

const {
  LOGS_DIR_NAME,
  LOGS_DIR_URL,
  LOG_FILE_BASIS_NAME,
  LOG_FILE_NAME,
  LOG_FILE_URL,
} = require('./constants/envConstants');

async function restoreEnvironment() {
  // object to save all the results of restoring environments
  const restoreStatusesObject = {};

  restoreStatusesObject[LOGS_DIR_NAME] = await createLogsDir(LOGS_DIR_URL);
  restoreStatusesObject[LOG_FILE_BASIS_NAME] = await createLogFile(LOG_FILE_URL, LOG_FILE_NAME);

  return JSON.stringify(restoreStatusesObject);
}

module.exports = restoreEnvironment;