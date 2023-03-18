module.exports = writeToLogFile;

const fsPromise = require('fs/promises');
const path = require('path');

const SERVER_LOG_DIR_NAME = "logs";
const SERVER_LOG_DIR_PATH = path.resolve('.');

function writeToLogFile(text) {
  createServerLogsDir(SERVER_LOG_DIR_PATH, SERVER_LOG_DIR_NAME)
  .then((responce) => {
    console.log(`writeToLogFile: responce: ${responce}`);
  })
  
}

function createServerLogsDir(pathToDir, name) {
  let finalPath = path.resolve(pathToDir, name);
  return fsPromise.mkdir(finalPath)
  .then(() => {
    return true;
  })
  .catch((err) => {
    console.log(`got new Error at 'createServerLogsDir': ${err}`);
    return false;
  })
}