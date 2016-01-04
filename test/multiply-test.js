const assert = require('assert');
const multiply = require('../lib/multiply');

describe('multiply', function () {

  it('should take an array of integers and returns an array of the products', function () {
    var array = [0, 1, 2, 3];

    assert.deepEqual([84, 12, 28, 21], multiply([1, 7, 3, 4]));
  });

});
