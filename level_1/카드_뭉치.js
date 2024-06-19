// const cards1 = ["i", "drink", "water"];
// const cards2 = ["want", "to"];
// const goal = ["i", "want", "to", "drink", "water"];

const cards1 = ["i", "water", "drink"];
const cards2 = ["want", "to"];
const goal = ["i", "want", "to", "drink", "water"];

let string = [];
const len = goal.length;
for (let i = 0; i < len; i++) {
    if (goal[i] === cards1[0]) string.push(cards1.shift());
    else if (goal[i] === cards2[0]) string.push(cards2.shift());
    else break;
}

console.log((string.length === goal.length) ? "Yes" : "No");