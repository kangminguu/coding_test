const keymap = ["ABACD", "BCEFD"];
const targets =  ["ABCD","DG", "AABB"];

const setKeys = new Set();
targets.forEach(arr => [...arr].forEach(n => setKeys.add(n)));

const objKeys = {};

setKeys.forEach(n => {
    let count = [];
    let minCount = 0;

    keymap.forEach(arr => {
        (arr.indexOf(n) + 1) === 0 ? null : count.push(arr.indexOf(n) + 1);
        minCount = Math.min(...count);
    });

    objKeys[n] = minCount;
});

let answer = targets.map(arr => {
    let count = 0;
    [ ...arr ].forEach(n => count += objKeys[n]);

    return count;
});

console.log(answer);

[...answer].forEach((n,idx) => {
    if (n === Infinity) answer[idx] = -1;
});

console.log(answer);
