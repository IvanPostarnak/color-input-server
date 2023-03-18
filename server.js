const path = require('path');
const dotenv = require('dotenv');
const createServer = require(path.resolve('src', 'create-server.js'));
const writeToLogFile = require(path.resolve('src', 'server-log.js'));

dotenv.config();
const PORT = process.env.PORT;
const HOST = process.env.hostname;
console.log(`PORT: ${PORT}, HOST: ${HOST}`);

const SERVER = createServer();
writeToLogFile();