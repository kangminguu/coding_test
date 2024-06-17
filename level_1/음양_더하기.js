const absolutes = [4, 7, 12];
const signs = [true, false, true];

let sum = 0;
absolutes.forEach((n, idx) => sum = signs[idx] ? sum + n : sum - n);

console.log(sum);

console.log(absolutes.reduce((acc, val, idx) => acc + (signs[idx] ? val : -val), 0));