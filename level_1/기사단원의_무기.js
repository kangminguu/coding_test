const number = 10;
const limit = 3;
const power = 2;

const arr_number = [];
for (let i = 1; i <= number; i++) arr_number.push(i);

// const arr_yagsu = [];
let yagsu = 0;
arr_number.forEach(n => {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (!(n % i)) count++;
    }
    if (n != 1) {
        count = Number.isInteger(Math.sqrt(n)) ? (count - 1) * 2 + 1 : count * 2;
    }
    // arr_yagsu.push((count > limit) ? limit : count);
    // console.log(yagsu);
    yagsu += (count > limit) ? power : count;
});

console.log(yagsu);