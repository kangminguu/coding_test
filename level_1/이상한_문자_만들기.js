const s = "try hello  world  ";

let answer = "";
s.split(" ").forEach((word, i) => {
    word.split("").forEach((n, idx) => answer += ((idx + 1) % 2) ? n.toUpperCase() : n.toLowerCase());
    if (i != s.split(" ").length - 1) answer += " ";
});

console.log(`@@${answer}@@`);