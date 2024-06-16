const s = "-1 -1";

console.log(`${s.split(" ").sort((a, b) => a - b)[0]} ${s.split(" ").sort((a, b) => a - b)[s.split(" ").length-1]}`);