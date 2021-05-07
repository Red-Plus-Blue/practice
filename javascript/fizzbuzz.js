const max = 16;
const printKey = (key, number) => console.log(key); 
const printNumber = (key, number) => console.log(number); 

let fizzes = ["" ,"" ,"Fizz"];
let buzzes = ["" ,"" , "", "", "Buzz"];
let actions = {
    ""          : printNumber,
    "Fizz"      : printKey,
    "Buzz"      : printKey,
    "FizzBuzz"  : printKey
}

Array.from(' '.repeat(max))
    .map((_, previous) => previous + 1)
    .forEach((number) => {
        let key = fizzes[0] + buzzes[0];
        fizzes.push(fizzes.shift());
        buzzes.push(buzzes.shift());
        actions[key](key, number);
    });
