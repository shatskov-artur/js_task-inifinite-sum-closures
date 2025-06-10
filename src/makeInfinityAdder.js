'use strict';

/***
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;
  const sum = (a) => {
    if (a === undefined) {
      const result = total;

      total = 0;

      return result;
    }

    return (b) => {
      if (b === undefined) {
        total += a;

        const result = total;

        total = 0;

        return result;
      } else {
        total += a + b;

        return sum;
      }
    };
  };

  return sum;
}

module.exports = makeInfinityAdder;
