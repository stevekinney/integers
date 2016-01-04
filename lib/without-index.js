module.exports = function (original, index) {
  array = original.concat([])
  array.splice(index, 1);
  return array;
};
