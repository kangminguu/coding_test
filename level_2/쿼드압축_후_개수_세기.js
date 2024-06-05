// const arr = [
//     [1,1,0,0],
//     [1,0,0,0],
//     [1,0,0,1],
//     [1,1,1,1]
// ];

const arr = [
    [1,1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,1],
    [0,0,0,0,1,1,1,1],
    [0,1,0,0,1,1,1,1],
    [0,0,0,0,0,0,1,1],
    [0,0,0,0,0,0,0,1],
    [0,0,0,0,1,0,0,1],
    [0,0,0,0,1,1,1,1]
];

// 00 10 20 30
// 01 11 21 31
// 02 12 22 32
// 03 13 23 33

const len = arr.length;

let countZero = 0;
let countOne = 0;

const sliceQurde = arr => {
    if (arr.length >= 4) {
        const arr1 = arr.slice(0, len/2).map(halfArr => halfArr.slice(0, len/2));
        const arr2 = arr.slice(0, len/2).map(halfArr => halfArr.slice(len/2, len));
        const arr3 = arr.slice(len/2, len).map(halfArr => halfArr.slice(0, len/2));
        const arr4 = arr.slice(len/2, len).map(halfArr => halfArr.slice(len/2, len));
        return [arr1, arr2, arr3, arr4];
    } else {
        return arr;
    }
}

const isAllSame = arr => {
    arr = arr.map(n => new Set(n.flat()).size === 1 ? [...new Set(n.flat())] : n);
    return arr;
}

let flatArr1;

flatArr1 = sliceQurde(arr);
flatArr1 = isAllSame(flatArr1);

console.log(flatArr1);

flatArr1.forEach((n, idx) => {
    if (n.length > 1) {
        flatArr1[idx] = isAllSame(sliceQurde(n));
    }
});

console.log(flatArr1);

// flatArr1[0] = sliceQurde(flatArr1[0]);
// flatArr1[0] = isAllSame(flatArr1[0]);

// console.log(flatArr1[0]);
