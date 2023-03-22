function logCounter() {
  let count = 0;

  function increment() {
    return ++count;
  }

  function getCount() {
    return count;
  }

  return {increment, getCount};
}

module.exports = logCounter;