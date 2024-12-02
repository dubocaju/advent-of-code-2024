const fs = require("fs");
const data = fs.readFileSync('input.txt', 'utf-8');
const firstList = [];
const secondList = [];
let similarityScore = 0;
let distanceScore = 0;

data.split(/\r?\n/).forEach(line =>  {
    line = line.split('   ');
    firstList.push(parseInt(line[0]));
    secondList.push(parseInt(line[1]));
});

const length = firstList.length;

for (let i = 0; i < length; i++) {
    const currentValue = firstList[i];
    const occurences = secondList.reduce((acc, value) => acc += value === currentValue ? 1 : 0, 0);
    similarityScore += currentValue * occurences;
}

for (let j = 0; j < length; j++) {
    const firstMin = Math.min(...firstList);
    const secondMin = Math.min(...secondList);
    distanceScore += Math.abs(firstMin - secondMin);
    firstList.splice(firstList.indexOf(firstMin), 1);
    secondList.splice(secondList.indexOf(secondMin), 1);
}

console.log("Distance score : " + distanceScore);
console.log("Similarity score : " + similarityScore);