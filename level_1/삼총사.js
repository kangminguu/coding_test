const number = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0];

const obj_number = {};
const len = number.length;
for (let i = 0; i < len; i++) obj_number[i] = number[i];

const set = new Set();
Object.keys(obj_number).forEach((n1, idx1) => {
    Object.keys(obj_number).forEach((n2, idx2) => {
        Object.keys(obj_number).forEach((n3, idx3) => {
            if (idx1 != idx2 && idx1 != idx3 && idx2 != idx3) {
                set.add([n1, n2, n3].sort((a, b) => a - b).join(","));
            }
        });
    });
});

let count = 0;
set.forEach(n => {
    let arr = n.split(",");
    let sum = obj_number[arr[0]] + obj_number[arr[1]] + obj_number[arr[2]];
    if (sum === 0) count++;
});

console.log(count);