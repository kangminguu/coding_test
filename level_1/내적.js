const a = [-1,0,1]	
const b = [1,0,-1]

console.log(a.reduce((pre, cur, idx) => pre + (cur * b[idx]), 0));