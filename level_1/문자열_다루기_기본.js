const s = "1234";

// console.log((s.length === 4 || s.length === 6) ? Number.isInteger(parseInt(s)) : false);

console.log([...s].filter(n => Number.isInteger(parseInt(n))).join(""));
console.log(parseInt(s));