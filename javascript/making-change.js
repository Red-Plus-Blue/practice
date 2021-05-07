const assert = require('assert');

const makingChange = (coins, change) => {
    let count = 0;
    let remaining = change;
    for(let current = 0; current < coins.length; ) {
        let coin = coins[current];
        if(coin <= remaining) {
            count++;
            remaining -= coin;
        } else {
          current++;  
        }
    }
    return count;
}

(() => {
    let coins = [25, 10, 5, 1];
    assert.strictEqual(makingChange(coins, 1),    1, "Change for 1c not correct");
    assert.strictEqual(makingChange(coins, 5),    1, "Change for 5c not correct");
    assert.strictEqual(makingChange(coins, 10),   1, "Change for 10c not correct");
    assert.strictEqual(makingChange(coins, 25),   1, "Change for 25c not correct");
    assert.strictEqual(makingChange(coins, 75),   3, "Change for 75c not correct");
    assert.strictEqual(makingChange(coins, 41),   4, "Change for 41c not correct");
    assert.strictEqual(makingChange(coins, 43),   6, "Change for 43c not correct");
})();

console.log("Passed all tests");
