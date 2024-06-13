const keymap = ["ABACD", "BCEFD"];
const targets =  ["ABCD","DG", "AABB"];

const setKeys = new Set(targets.join(""));
const objKeys = {};

setKeys.forEach(n => {
    let count = [];
    let minCount = 0;

    keymap.forEach(s => {
        if ((s.indexOf(n) + 1) != 0) count.push(s.indexOf(n) + 1);
        minCount = Math.min(...count);
    });

    objKeys[n] = minCount;
});

let answer = targets.map(s => {
    let count = 0;

    const len = s.length;
    for (let i = 0; i < len; i++) {
        if (objKeys[s[i]] === Infinity) {
            count = -1;
            break;
        } else {
            count += objKeys[s[i]];
        }
    }

    return count;
});

console.log(answer);

// function solution(keymap, targets) {
//     const answer = [];
//     const map = {}
//     for (const items of keymap) {
//         items.split('').map((item, index) => map[item] = (map[item] < index+1 ? map[item] : index+1))
//     }
//     for (const items of targets) {
//         answer.push(items.split('').reduce((cur, item) => cur += map[item], 0) || -1)
//     }
//     return answer;
// }