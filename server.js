const path = require('path');
const dotenv = require('dotenv');

const createServer = require(path.resolve('src', 'createServer.js'));
const writeToLogFile = require(path.resolve('src', 'serverLog.js'));
const restoreEnvironment = require(path.resolve('src', 'restoreEnvironment.js'));

dotenv.config();
const PORT = process.env.PORT;
const HOST = process.env.hostname;
console.log(`PORT: ${PORT}, HOST: ${HOST}`);

const RESTORE_STATUSES = restoreEnvironment();
console.log(`RESTORE_STATUSES: ${JSON.stringify(RESTORE_STATUSES)}`);

const SERVER = createServer();
writeToLogFile();