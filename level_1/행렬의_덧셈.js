const arr1 = [[1],[2]];
const arr2 = [[3],[4]];

// const arr1 = [[1,2],[2,3]];
// const arr2 = [[3,4],[5,6]];

const lenH = arr1.length;
const lenW = arr1[0].length;
const arr = Array.from(Array(lenH), () => new Array(lenW).fill(" "));

console.log(arr);

for (let h = 0; h < lenH; h++) {
    for (let w = 0; w < lenW; w++) {
        arr[h][w] = arr1[h][w] + arr2[h][w];
    }
}

console.log(arr);