const number = 10;
const limit = 3;
const power = 2;

const arr_number = [];
for (let i = 1; i <= number; i++) arr_number.push(i);

// console.log(Math.sqrt(10));
// console.log(findYagsu(16));
// 1 2 5 10

console.log(findYagsu(9));
// 1 2 4 8 16

function findYagsu(n) {
    let count = 0;
    for (let i = 1; i <= Math.ceil(Math.sqrt(n)); i++) {
        if (!(n % i)) count++;
    }
    return count;
}