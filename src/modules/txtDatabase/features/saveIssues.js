const convertIssue = require("./../helpers/convertIssue");
const convertIssueMeta = require("./../helpers/convertIssueMeta");
const writeIssue = require("./../helpers/writeIssue");

function saveIssues(arrayOfIssueObjects) {
  let response;
  let counter = 0;

  try {
    if (arrayOfIssueObjects === null || arrayOfIssueObjects === undefined) {
      throw new Error(`'arrayOfIssueObjects' are '${arrayOfIssueObjects}'`);
    }

    arrayOfIssueObjects.forEach((issueObject) => {
      let issueNameAndDescription = convertIssue(issueObject.name, issueObject.description);
      let issueMeta = convertIssueMeta(issueObject);
      let savingString = issueNameAndDescription + "\n" + issueMeta + "\n\n";

      if (writeIssue(savingString) === true) {
        counter++;
      }
    })

    response = counter === arrayOfIssueObjects.length;
    
  } catch (err) {
    console.error(`Error: ${err.message} at 'saveIssues.js' file`);
    response = err.message;

  }

  return response;
}

module.exports = saveIssues;