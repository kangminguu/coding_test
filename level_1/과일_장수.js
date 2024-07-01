// const k = 3;
// const m = 4;
// const score = [1, 2, 3, 1, 2, 3, 1];

const k = 4;
const m = 3;
const score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];

let apple = [...score].sort((a, b) => a - b);
// const bestScore = [];
let bestScore = 0;

while (apple.length >= m) {
    bestScore += apple.slice(-m)[0] * m;
    apple = apple.slice(0, apple.length - m);
}

// while (apple.length >= m) {
//     const box = [];

//     // for (let i = 0; i < m; i++) box.push(apple.pop());


//     // bestScore.push(box[m - 1] * m);
//     bestScore += box[m - 1] * m;
// }

// // console.log(bestScore.reduce((a, b) => a + b, 0));
console.log(bestScore);