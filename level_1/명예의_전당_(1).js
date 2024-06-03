// const score = [10, 100, 20, 150, 1, 100, 200];
// const k = 3;

const score = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000];
const k = 4;

function solution(k, score) {
    const orderArray = [];
    const hallOfFame = [];

    const len = score.length;

    for(let i = 0; i < len; i++) {
        orderArray.push(score.shift());
        orderArray.sort((a, b) => b - a);
        hallOfFame.push([ ...orderArray ].slice(0, k));
    }

    console.log(hallOfFame);

    const answer = hallOfFame.map(arr => arr[arr.length-1]);

    return answer;
}

console.log(solution(k, score));