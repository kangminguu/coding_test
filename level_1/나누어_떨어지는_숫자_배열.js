const arr = [3,2,6];
const divisor = 10;

console.log(arr.filter(n => !(n % divisor)).sort((a, b) => a - b));