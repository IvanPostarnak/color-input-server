const { LOGS_DIR_NAME } = require('./constants/envConstants');
const { createLogsDir } = require('./helpers/createLogsDir');

async function restoreEnvironment() {
  const restoreStatusesObject = {};

  restoreStatusesObject[LOGS_DIR_NAME] = await createLogsDir(LOGS_DIR_NAME);

  return JSON.stringify(restoreStatusesObject);
}

module.exports = restoreEnvironment;