module.exports = {
  txtDatabaseNames: require('./constants/txtConstants').txtDatabaseNames,
  txtDatabaseURLs: require('./constants/txtConstants').txtDatabaseURLs,
  createTxtDir: require('./shared/createTxtDir'),
  createColorCombinationsTxtFile: require('./shared/createCCTxtFile'),
  createIssuesTxtFile: require('./shared/createIssuesTxtFile')
}