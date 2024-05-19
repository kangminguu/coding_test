const progresses = [40, 20, 30, 20];
const speeds = [1, 1, 1, 1];

let answer = [];

const lastProgresses = progresses.map(n => 100-n);
const lastTime = lastProgresses.map((n, idx) => Math.ceil(n/speeds[idx]));

let coIdx = 1
lastTime.map((n, idx) => {
    if(idx === 0) 
        answer.push(1);
    else {
        if(n <= lastTime[idx-coIdx]) {
            answer[answer.length-1] += 1;
            coIdx += 1;
        } else {
            answer.push(1);
            coIdx = 1;
        }
    }
});

console.log(lastProgresses);
console.log(lastTime);

console.log(answer);
