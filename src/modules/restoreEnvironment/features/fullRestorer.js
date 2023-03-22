const createLogsDir = require('./../helpers/createLogsDir');
const createLogFile = require('./../helpers/createLogFile');

const {
  LOGS_DIR_NAME,
  LOGS_DIR_URL,
  LOG_FILE_BASIS_NAME,
  LOG_FILE_NAME,
  LOG_FILE_URL,
} = require('./../constants/envConstants');

function fullRestorer() {
  // object to save all the results of restoring environments
  const restoreStatusesObject = {};

  console.log(`LOGS_DIR_NAME : ${LOGS_DIR_NAME}`)
  console.log(`LOGS_DIR_URL : ${LOGS_DIR_URL}`)
  console.log(`LOG_FILE_BASIS_NAME : ${LOG_FILE_BASIS_NAME}`)
  console.log(`LOG_FILE_NAME : ${LOG_FILE_NAME}`)
  console.log(`LOG_FILE_URL : ${LOG_FILE_URL}`)

  restoreStatusesObject[LOGS_DIR_NAME] = createLogsDir(LOGS_DIR_URL);
  restoreStatusesObject[LOG_FILE_BASIS_NAME] = createLogFile(LOG_FILE_URL, LOG_FILE_NAME);

  return JSON.stringify(restoreStatusesObject);
}

module.exports = fullRestorer;