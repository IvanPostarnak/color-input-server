function convertIssue(name, description) {
  let solutionString = '';
  
  try {
    if (name === undefined || description === undefined) {
      throw new Error(`'name' & 'description' fields are '${name}' & '${description}'`);
    }
    let solutionName = `Name:${name}`;
    let solutionDescription = `Description:${description}`;
    solutionString = solutionName + "\n" + solutionDescription;

  } catch (err) {
    console.error(`Error: ${err.message} at 'convertMetaOfCombo.js' file`);
    solutionString = null;

  }

  return solutionString;
}

module.exports = convertIssue;