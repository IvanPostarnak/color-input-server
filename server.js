const dotenv = require('dotenv');
dotenv.config();

const path = require('path');
const createServer = require(path.resolve('src', 'create-server.js'));

const SERVER = createServer();