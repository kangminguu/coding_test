const n = 123;

console.log([...n.toString()].reduce((a, b) => parseInt(a) + parseInt(b), 0));