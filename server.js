const path = require('path');
const dotenv = require('dotenv');

const createServer = require(path.resolve('src', 'createServer.js'));
const { restoreEnvironment } = require(path.resolve('src', 'modules', 'restoreEnvironment', 'restoreEnvironment.js'));
const { writeLog } = require(path.resolve('src', 'modules', 'serverLog', 'serverLog.js'));

const RESTORE_STATUSES = {};
let response = restoreEnvironment();
console.log(response)

for (let key in JSON.parse(response)) {
  RESTORE_STATUSES[key] = JSON.parse(response)[key];
}
writeLog(`RESTORE_STATUSES: ${JSON.stringify(RESTORE_STATUSES)}`);

dotenv.config();
writeLog(`PORT: ${process.env.PORT}, HOST: ${process.env.hostname}`);

const SERVER = createServer();