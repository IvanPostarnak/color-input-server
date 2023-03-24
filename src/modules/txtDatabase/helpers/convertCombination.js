function convertCombination(arrayOfColors) {
  let solutionString = '';

  try {
    solutionString = `(${arrayOfColors.length})`;
    for (let color in arrayOfColors) {
      solutionString += ' ' + color;
    }

  } catch (err) {
    console.error(`Error: ${err.message} at 'convertCombination.js' file`);
    solutionString = null;

  }

  return solutionString;
}

module.exports = convertCombination;