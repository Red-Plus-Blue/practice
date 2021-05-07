const assert = require('assert');

const ones = (number) => {
    let ones = 0;
    for(let bit = 32; bit >= 0; bit--) {
        let power = Math.pow(2, bit);
        if(power <= number) {
            ones++;
            number -= power;
        }
    }
    return ones;
}

assert.strictEqual(ones(0), 0, "Binary 0's for 1");
assert.strictEqual(ones(1), 1, "Binary 1's for 1");
assert.strictEqual(ones(2), 1, "Binary 1's for 2");
assert.strictEqual(ones(3), 2, "Binary 1's for 3");
assert.strictEqual(ones(5), 2, "Binary 1's for 5");
assert.strictEqual(ones(7), 3, "Binary 1's for 7");

console.log("Passed all tests");