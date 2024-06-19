const food = [1, 7, 1, 2];

let answer = ""
food.slice(1,).forEach((n, idx) => answer += `${idx + 1}`.repeat(parseInt(n / 2)));

console.log(answer + "0" + [...answer].reverse().join(""));