const arr = [1,1,3,3,0,1,1];
let answer = [];

arr.forEach((num, idx) => { if(num != arr[idx+1]) answer.push(num) });

console.log(answer);