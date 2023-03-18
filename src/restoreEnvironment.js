const path = require('path');
const fsPromise = require('fs/promises');

const SERVER_LOGS_DIR_NAME = "logs";

function restoreEnvironment() {
  const restoreStatusesObject = {};

  createServerLogsDir()
  .then((response) => {
    restoreStatusesObject[SERVER_LOGS_DIR_NAME] = response;
    console.log(`restoreStatusesObject: ${JSON.stringify(restoreStatusesObject)}`);
  })
}


function createServerLogsDir() {
  let finalPath = path.resolve('.', SERVER_LOGS_DIR_NAME);
  return fsPromise.mkdir(finalPath)
  .then(() => {
    return true;
  })
  .catch((err) => {
    return err.message;
  })
}

module.exports = restoreEnvironment;