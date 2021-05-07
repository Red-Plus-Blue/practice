const assert = require('assert');

const mapping = [
    (s) => s.replace(/IIIII/g, "V"),
    (s) => s.replace(/IIII/g, "IV"),
    (s) => s.replace(/VV/g, "X"),
    (s) => s.replace(/VIV/g, "IX")
];

const romanNumerals = (number) => {
    let numerals = "I".repeat(number);
    for(let key in mapping) {
        numerals = mapping[key](numerals);
    }
    return numerals;
}

/*
assert.strictEqual(romanNumerals(1),    "I",    "Numerals for 1");
assert.strictEqual(romanNumerals(4),    "IV",   "Numerals for 4");
assert.strictEqual(romanNumerals(5),    "V",    "Numerals for 5");
assert.strictEqual(romanNumerals(6),    "VI",   "Numerals for 6");
assert.strictEqual(romanNumerals(9),    "IX",   "Numerals for 9");
assert.strictEqual(romanNumerals(10),   "X",    "Numerals for 10");
assert.strictEqual(romanNumerals(13),   "XIII", "Numerals for 13");
*/
assert.strictEqual(romanNumerals(14),   "XIV",  "Numerals for 14");
assert.strictEqual(romanNumerals(20),   "XX",   "Numerals for 20");

console.log("Passed all tests");