const sizes = [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]];

const len = sizes.length;
const size_w = sizes.map(n => n[0]).sort((a, b) => a - b);
const size_h = sizes.map(n => n[1]).sort((a, b) => a - b);

const all_size = [...new Set(sizes.flat().sort((a, b) => a - b))];
const max_size = Math.max(...sizes.flat());

let i = 0;
sizes.forEach(card => {
    while (!(card[0] <= all_size[i] || card[1] <= all_size[i])) i++;
});

console.log(max_size * all_size[i]);