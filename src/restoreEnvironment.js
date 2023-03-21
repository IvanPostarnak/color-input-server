const path = require('path');
const fsPromise = require('fs/promises');

const LOGS_DIR_NAME = "logs";

async function restoreEnvironment() {
  const restoreStatusesObject = {};
  
  restoreStatusesObject[LOGS_DIR_NAME] = await createLogsDir(LOGS_DIR_NAME)
  console.log(`restoreStatusesObject: ${JSON.stringify(restoreStatusesObject)}`);
  return JSON.stringify(restoreStatusesObject);
}


async function createLogsDir(name) {
  let finalPath = path.resolve('.', name);
  return fsPromise.mkdir(finalPath)
  .then(() => {
    return true;
  })
  .catch((err) => {
    return err.message;
  })
}

module.exports = restoreEnvironment;