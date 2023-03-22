module.exports = {
  writeLog: require('./features/writeLog'),
  logURLs: require('./constants/logConstants').logURLs,
  logNames: require('./constants/logConstants').logNames,
  createLogsDir: require('./shared/createLogsDir'),
  createLogFile: require('./shared/createLogFile')
};