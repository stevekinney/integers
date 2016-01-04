const assert = require('assert');
const withoutIndex = require('../lib/without-index');

describe('withoutIndex', function () {

  it('should return an array without a the first index', function () {
    var array = [0, 1, 2, 3];

    assert.deepEqual([1, 2, 3], withoutIndex(array, 0));
  });

  it('should return an array without a the first index', function () {
    var array = [0, 1, 2, 3];

    assert.deepEqual([0, 2, 3], withoutIndex(array, 1));
  });

  it('should return an array without a the first index', function () {
    var array = [0, 1, 2, 3];

    assert.deepEqual([0, 1, 3], withoutIndex(array, 2));
  });

  it('should return an array without a the first index', function () {
    var array = [0, 1, 2, 3];

    assert.deepEqual([0, 1, 2], withoutIndex(array, 3));
  });

});
