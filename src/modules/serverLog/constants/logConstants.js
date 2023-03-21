const path = require('path');
const DATE = new Date();

// root
const ROOT = '.';

// name of the directory for all server logs
const LOGS_DIR_NAME = 'logs';

// url of logs directory
const LOGS_DIR_URL = path.join(ROOT, LOGS_DIR_NAME);

// basis file name for single server log file
const LOG_FILE_BASIS_NAME = 'log';

// actual current log file name
const LOG_FILE_NAME = `${LOG_FILE_BASIS_NAME}-${DATE.getDate()}-${DATE.getMonth()}-${DATE.getFullYear()}`;

// url of log file
const LOG_FILE_URL = path.join(LOGS_DIR_URL, LOG_FILE_NAME);

module.exports = {
  LOGS_DIR_NAME,
  LOGS_DIR_URL,
  LOG_FILE_BASIS_NAME,
  LOG_FILE_NAME,
  LOG_FILE_URL,
};