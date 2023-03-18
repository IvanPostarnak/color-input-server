const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;
const HOST = process.env.hostname;
console.log(`PORT: ${PORT}, HOST: ${HOST}`);

const createServer = require(path.resolve('src', 'create-server.js'));
const SERVER = createServer();