const numbers = [5, 0, 2, 7];
const set = new Set();
const len = numbers.length;

for (let m = 0; m < len; m++) {
    for (let n = 1; n < len; n++) {
        set.add(numbers[m] + numbers[(m + n) % len]);
    }
}

console.log([...set].sort((a, b) => a - b));