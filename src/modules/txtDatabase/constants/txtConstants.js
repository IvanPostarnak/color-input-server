const path = require('path');

// root
const ROOT = path.join('.', '..');

// database dir name
const DB_ROOT = 'color-input-database'

// name of the directory for all txt database
const TXT_DB_DIR_NAME = 'txt';

// url of txt DB directory
const TXT_DB_DIR_URL = path.join(ROOT, DB_ROOT, TXT_DB_DIR_NAME);

// basis file name for single color combinations file
const TXT_DB_CC_FILE_NAME_BASIS = 'color-combinations';

// color combinations file extension
const TXT_DB_FILE_EXT = 'txt';

// actual current color combinations file name
const TXT_DB_CC_FILE_NAME = `${TXT_DB_CC_FILE_NAME_BASIS}.${TXT_DB_FILE_EXT}`;

// url of color-combinations file
const TXT_DB_CC_FILE_URL = path.join(TXT_DB_DIR_URL, TXT_DB_CC_FILE_NAME);

// issues file basis name
const TXT_DB_ISSUES_FILE_NAME_BASIS = 'issues';

// actual current issues file name
const TXT_DB_ISSUES_FILE_NAME = `${TXT_DB_ISSUES_FILE_NAME_BASIS}.${TXT_DB_FILE_EXT}`;

// url of issues file
const TXT_DB_ISSUES_FILE_URL = path.join(TXT_DB_DIR_URL, TXT_DB_ISSUES_FILE_NAME);

exports.txtDatabaseNames = {
  TXT_DB_DIR_NAME,
  TXT_DB_CC_FILE_NAME_BASIS,
  TXT_DB_CC_FILE_NAME,
  TXT_DB_ISSUES_FILE_NAME_BASIS,
  TXT_DB_ISSUES_FILE_NAME
}

exports.txtDatabaseURLs = {
  TXT_DB_DIR_URL,
  TXT_DB_CC_FILE_URL,
  TXT_DB_ISSUES_FILE_URL
}