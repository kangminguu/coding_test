const arr = [2, 12, 5, 4, 11];

const minNum = arr.indexOf([...arr].sort((a, b) => a - b).shift());
console.log([...arr.slice(0, minNum)].concat([...arr.slice(minNum + 1,)]));
// (arr.length) ? console.log(arr) : console.log([-1]);
// Math.min(), filter()