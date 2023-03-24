const path = require('path');
const dotenv = require('dotenv');

const { restoreEnvironment } = require('./src/modules/restoreEnvironment/restoreEnvironment');
const { writeLog } = require('./src/modules/serverLog/serverLog');
const createServer = require('./src/shared/createServer');
const saveRequestData = require('./src/features/saveRequestData');
const calcResponseStatusCode = require('./src/helpers/calcResponseStatusCode');
const { type } = require('os');

// name of main SERVER file
const SERVER_JS = path.basename(__filename);

// restore environment: files, dirs and etc that are not Git-tracked
const RESTORE_STATUSES = restoreEnvironment();
writeLog(`RESTORE_STATUSES: ${JSON.stringify(RESTORE_STATUSES)}`, SERVER_JS);

// read '.env' configuration environment file and set parameters
dotenv.config();
writeLog(`PORT: ${process.env.PORT}, HOST: ${process.env.hostname}`, SERVER_JS);
writeLog(`origin: ${process.env.ORIGIN}, headers: ${process.env.HEADERS}`, SERVER_JS);
writeLog(`METHODS: ${process.env.METHODS}`, SERVER_JS);

// creating server Object
const SERVER = createServer();
writeLog(`SERVER: ${SERVER}, ${JSON.stringify(SERVER)}`, SERVER_JS);

// reqcting on the request
SERVER.on('request', (request, response) => {
  // set CORS
  response.setHeader("Access-Control-Allow-Origin", process.env.ORIGIN);
  response.setHeader("Access-Control-Allow-Headers", process.env.HEADERS);
  response.setHeader("Access-Control-Allow-Methods", process.env.METHODS);

  // extracting request meta
  const { method, url, headers } = request;
  const userAgent = headers['user-agent'];
  writeLog(`method : '${method}', url : '${url}', userAgent : '${userAgent}'`, SERVER_JS);

  switch (method) {
    case 'OPTIONS':
      response.statusCode = 200;
      writeLog(`SERVER react on OPTIONS: ${response.statusCode}`, SERVER_JS);
      response.end();
      break;
    
    case 'POST':
      // extracting request data and saving it, if it is a POST method
      let requestData = [];
      savingDataStatus = false;
      request.on('data', (chunk) => {
        requestData.push(chunk);
      })
      request.on('end', () => {
        requestData = Buffer.concat(requestData).toString();
        writeLog(`SERVER request data: (${typeof requestData}) ${requestData}`, SERVER_JS);
        savingDataStatus = saveRequestData(requestData);
        writeLog(`SERVER savingDataStatus: ${savingDataStatus}`, SERVER_JS);
        response.statusCode = calcResponseStatusCode(savingDataStatus);
        response.end();
      })
      break;
  }

  request.on('error', (error) => {
    writeLog(`SERVER request error: ${error.message}`, SERVER_JS);
  })  
  
  response.on('error', (error) => {
    writeLog(`SERVER response error: ${error.message}`, SERVER_JS);
  })
})

// make SERVER listen to the port
SERVER.listen(process.env.PORT, () => {
  writeLog(`SERVER.listen(${process.env.PORT})`, SERVER_JS);
});
