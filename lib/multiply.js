const withoutIndex = require('./without-index');

module.exports = function (integers) {
  return integers.map((number, index, array) => {
    return withoutIndex(integers, index).reduce((product, i) => product * i);
  });
};
