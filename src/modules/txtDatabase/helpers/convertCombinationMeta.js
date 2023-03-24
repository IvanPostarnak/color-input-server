function convertCombinationMeta(colorCombinationObj) {
  let solutionMetaString = ''

  try {
    for (let key in colorCombinationObj) {
      if (key !== "colors") {
        solutionMetaString += `${key}:${colorCombinationObj[key]}` + ',';
      }
    }
    solutionMetaString = solutionMetaString.slice(0, solutionMetaString.length - 1);

  } catch (err) {
    console.error(`Error: ${err.message} at 'convertCombinationMeta.js' file`);
    solutionMetaString = null;

  }

  return solutionMetaString;
}

module.exports = convertCombinationMeta;