function convertIssueMeta(issueObj) {
  let solutionMetaString = ''

  try {
    for (let key in issueObj) {
      if (key !== "name" && key !== 'description') {
        solutionMetaString += `${key}:${issueObj[key]}` + ',';
      }
    }
    solutionMetaString = solutionMetaString.slice(0, solutionMetaString.length - 1);

  } catch (err) {
    console.error(`Error: ${err.message} at 'convertIssueMeta.js' file`);
    solutionMetaString = null;

  }

  return solutionMetaString;
}

module.exports = convertIssueMeta;