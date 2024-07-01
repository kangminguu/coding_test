const n = 4;
const m = 1;
const section = [1, 2, 3, 4];

// const n = 8;
// const m = 4;
// const section = [2, 3, 6];

let wall = new Array(n).fill(1);
section.forEach(sec => wall[sec - 1] = 0);
let count = 0;

for (let i = 0; i < n; i++) {
    if (wall[i] === 0) {
        for (let s = 0; s < m; s++) {
            wall[i + s] = 1;
        }
        count++;
    }
}

console.log(count)
// while (wall.includes(0)) {
    
// }