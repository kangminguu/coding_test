let [name, yearning, photo] = [
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
        ["may", "kein", "kain", "radi"],
        ["may", "kein", "brin", "deny"],
        ["kon", "kain", "may", "coni"]
    ]
];

const geulium = {};
const len = name.length;
for (let i = 0; i < len; i++) geulium[name[i]] = yearning[i];

const a = photo.map(n => {
    return n.reduce((pre, cur) => pre + ((geulium[cur] === undefined) ? 0 : geulium[cur]), 0);
});

console.log(a);