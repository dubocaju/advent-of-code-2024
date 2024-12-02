const fs = require("fs");
const data = fs.readFileSync('input.txt', 'utf-8');
let safeReports = 0;

data.split(/\r?\n/).map(line => line.split(' ').map(num => parseInt(num))).forEach(report =>  {
    if (isSafe(report)){
        safeReports++;
    } else {
        for (let i = 0; i <= report.length; i++) {
            const newReport = report.filter((_, index) => index !== i)
            if (isSafe(newReport)) {
                safeReports++;
                break;
            }
        }
    }
});

function isSafe(report) {
    const shouldBeIncreasing = report[1] > report[0];

    for (let j = 1; j < report.length; j++) {
        if (shouldBeIncreasing && report[j] < report[j - 1]) {
            return false;
        }
        if (!shouldBeIncreasing && report[j] > report[j - 1]) {
            return false;
        }
        const abs = Math.abs(report[j] - report[j - 1]);
        if ( abs < 1 || abs > 3) {
            return false;
        }
    }

    return true;
}

console.log("Safe reports : " + safeReports);