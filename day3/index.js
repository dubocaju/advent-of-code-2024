const fs = require("fs");
const data = fs.readFileSync('input.txt', 'utf-8');
const instructions  = data.match(/(mul[(]\d{1,3}[,]\d{1,3}[)]|do\(\)|don't\(\))/g);
let enabled = true;
let sum = 0;

for (const instruction of instructions) {
    if (instruction === "do()") {
        enabled = true;
        continue;
    }
    if (instruction === "don't()") {
        enabled = false;
        continue;
    }
    if (enabled) {
        const numbers = instruction.match(/\d{1,3}/g);
        sum += parseInt(numbers[0]) * parseInt(numbers[1]);
    }
}

console.log("Result : " + sum);