const path = require('path');
const dotenv = require('dotenv');

const createServer = require(path.resolve('src', 'createServer.js'));
const { writeLog } = require(path.resolve('src', 'modules', 'serverLog', 'serverLog.js'));
const restoreEnvironment = require(path.resolve('src', 'modules', 'restoreEnvironment', 'restoreEnvironment.js'));

dotenv.config();
const PORT = process.env.PORT;
const HOST = process.env.hostname;
console.log(`PORT: ${PORT}, HOST: ${HOST}`);

const RESTORE_STATUSES = {};
restoreEnvironment()
.then((response) => {
  for (let key in JSON.parse(response)) {
    RESTORE_STATUSES[key] = JSON.parse(response)[key];
  }
  console.log(`RESTORE_STATUSES: ${JSON.stringify(RESTORE_STATUSES)}`);
});

const SERVER = createServer();
writeLog();