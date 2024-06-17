const x = -4
const n = 2

function solution(x, n) {
    let answer = [];
    for (let i = 1; i <= n; i++) answer.push(x * i);
    return answer;
}

console.log(solution(x, n))