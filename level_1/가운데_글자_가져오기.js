const s = "abcde";

console.log((s.length%2) ? s.slice(s.length/2, s.length/2+1) : s.slice(s.length/2-1, s.length/2+1))