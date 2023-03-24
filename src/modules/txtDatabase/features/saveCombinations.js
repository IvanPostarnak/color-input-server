const convertCombinationMeta = require("./../helpers/convertCombinationMeta");
const convertCombination = require("./../helpers/convertCombination");
const writeColorCombination = require("./../helpers/writeCombination");

function saveCombinations(arrayOfCombinationObjects) {
  let response;
  let counter = 0;

  try {
    if (arrayOfCombinationObjects === null || arrayOfCombinationObjects === undefined) {
      throw new Error(`'arrayOfCombinationObjects' are '${arrayOfCombinationObjects}'`);
    }

    arrayOfCombinationObjects.forEach((combinationObject) => {
      let combination = convertCombination(combinationObject.colors);
      let combinationMeta = convertCombinationMeta(combinationObject);
      let savingString = combination + "\n" + combinationMeta + "\n\n";

      if (writeColorCombination(savingString) === true) {
        counter++;
      }
    })

    response = counter === arrayOfCombinationObjects.length;

  } catch (err) {
    console.error(`Error: ${err.message} at 'saveCombination.js' file`);
    response = err.message;

  }

  return response;
}

module.exports = saveCombinations;