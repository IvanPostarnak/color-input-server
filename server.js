const path = require('path');
const dotenv = require('dotenv');

const { restoreEnvironment } = require('./src/modules/restoreEnvironment/restoreEnvironment');
const { writeLog } = require('./src/modules/serverLog/serverLog');
const createServer = require('./src/shared/createServer');
const saveRequestData = require('./src/features/saveRequestData');
const calcResponseStatusCode = require('./src/helpers/calcResponseStatusCode');

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

// reqcting on the request
SERVER.on('request', (request, response) => {
  const { method, url, headers } = request;
  const userAgent = headers['user-agent'];
  writeLog(`method : '${method}, url : '${url}', userAgent : '${userAgent}'`);

  let requestData = [];
  request.on('data', (chunk) => {
    requestData.push(chunk);
  })
  request.on('end', () => {
    requestData = Buffer.concat(requestData).toString();
    writeLog(`SERVER request data: ${requestData}`, SERVER_JS);
  })
  request.on('error', (error) => {
    writeLog(`SERVER request error: ${error.message}`, SERVER_JS);
  })

  // saving requestData into database
  let savingDataStatus = saveRequestData(requestData);
  writeLog(`SERVER savingDataStatus: ${savingDataStatus}`, SERVER_JS);

  response.statusCode = calcResponseStatusCode(savingDataStatus);
  response.statusMessage = '';
  response.setHeader('content-type', 'text/plain');
  writeLog(`SERVER response.statusCode: ${response.statusCode}`, SERVER_JS);

  response.write('First chunk');
  response.write('Second chunk');
  response.write('Third chunk');
  response.end('Last chunk');

  response.on('error', (error) => {
    writeLog(`SERVER response error: ${error.message}`, SERVER_JS);
  })
})

// make SERVER listen to the port
SERVER.listen(process.env.PORT, () => {
  writeLog(`SERVER.listen(${process.env.PORT})`, SERVER_JS);
});
