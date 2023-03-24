const statusCodes = require('./../constants/serverConstants').statusCodes;

function calcResponseStatusCode(savingDataStatus) {
  let responseCode;

  if (typeof savingDataStatus === 'boolean') {
    responseCode = savingDataStatus === true
    ? statusCodes.SUCCESS
    : statusCodes.SERVER_ERROR;
  } else {
    responseCode = statusCodes.SERVER_ERROR;
  }

  return responseCode;
}

module.exports = calcResponseStatusCode