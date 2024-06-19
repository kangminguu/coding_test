const a = 3;
const b = 1;
const n = 20;

let 빈병 = n;
let 받은콜라총개수 = 0;

while (빈병 >= a) {
    받은콜라총개수 += Math.floor(빈병 / a) * b;
    빈병 = (빈병 % a) + (Math.floor(빈병 / a) * b);
}

console.log(받은콜라총개수);