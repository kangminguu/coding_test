let n, lost, reserve;
// n = 5;
// lost = [2, 4];
// reserve = [1, 3, 5];

// n = 5;
// lost = [2, 4];
// reserve = [3];

n = 7;
lost = [2, 4, 6];
reserve = [1, 3, 7];

let answer = 0;
let answer2 = 0;

const gymSuit = {};
for(let i = 1; i < n+1; i++) {
    gymSuit[i] = 1;
}
const gymSuit2 = {};
for(let i = 1; i < n+1; i++) {
    gymSuit2[i] = 1;
}

lost.forEach(n => gymSuit[n] -= 1);
reserve.forEach(n => gymSuit[n] += 1);
lost.forEach(n => gymSuit2[n] -= 1);
reserve.forEach(n => gymSuit2[n] += 1);

Object.keys(gymSuit).reverse().forEach(n => {
    if (gymSuit[n] === 0 && gymSuit[parseInt(n)-1] === 2) {
        gymSuit[n] += 1;
        gymSuit[parseInt(n)-1] -= 1;
    }
});
Object.keys(gymSuit).forEach(n => {
    if (gymSuit[n] === 0 && gymSuit[parseInt(n)+1] === 2) {
        gymSuit[n] += 1;
        gymSuit[parseInt(n)+1] -= 1;
    }
});
Object.values(gymSuit).forEach(n => {
    if (n != 0) answer++;
});

Object.keys(gymSuit2).forEach(n => {
    if (gymSuit2[n] === 0 && gymSuit2[parseInt(n)+1] === 2) {
        gymSuit2[n] += 1;
        gymSuit2[parseInt(n)+1] -= 1;
    }
});
Object.keys(gymSuit2).reverse().forEach(n => {
    if (gymSuit2[n] === 0 && gymSuit2[parseInt(n)-1] === 2) {
        gymSuit2[n] += 1;
        gymSuit2[parseInt(n)-1] -= 1;
    }
});
Object.values(gymSuit2).forEach(n => {
    if (n != 0) answer2++;
});

console.log(answer);
console.log(answer2);

// { '1': 2, '2': 1, '3': 1, '4': 0, '5': 1, '6': 1, '7': 1 }