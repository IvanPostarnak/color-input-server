const path = require('path');
const dotenv = require('dotenv');

const { restoreEnvironment } = require('./src/modules/restoreEnvironment/restoreEnvironment');
const { writeLog } = require('./src/modules/serverLog/serverLog');
const createServer = require('./src/createServer');

// name of main SERVER file
const SERVER_JS = path.basename(__filename);

// restore environment: files, dirs and etc that are not Git-tracked
const RESTORE_STATUSES = restoreEnvironment();
writeLog(`RESTORE_STATUSES: ${JSON.stringify(RESTORE_STATUSES)}`, SERVER_JS);

// read '.env' configuration environment file and set parameters
dotenv.config();
writeLog(`PORT: ${process.env.PORT}, HOST: ${process.env.hostname}`, SERVER_JS);

// creating server Object
const SERVER = createServer();
writeLog(`SERVER: ${SERVER}, ${JSON.stringify(SERVER)}`, SERVER_JS);