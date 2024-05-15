function solution(dots) {
    var answer = 0;
    return answer;
}

// 01 23
// 02 13
// 03 12

const dots = [[1, 4], [9, 2], [3, 8], [11, 6]];

let a = Math.abs(dots[0][0] - dots[2][0]);
let b = Math.abs(dots[0][1] - dots[2][1]);
let c = Math.abs(dots[1][0] - dots[3][0]);
let d = Math.abs(dots[1][1] - dots[3][1]);

console.log(a, b);
console.log(c, d);
