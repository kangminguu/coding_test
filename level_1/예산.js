const d = [1, 3, 2, 5, 4];
const budget = 9;
d.sort((a, b) => a - b).reduce((pre, cur, i) => {
    pre += cur;
    if (pre > budget) console.log(i);
    if (i === d.length) console.log(i + 1);
    console.log("A")
}, 0);
