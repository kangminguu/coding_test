const priorities = [1, 1, 9, 1, 1, 1];
const location = 0;
const sortedpriorities = [ ...priorities ].sort((a, b) => b-a);

priorities[location] += "#";
let count = 1;
// const priorObj = {};
// priorities.forEach((n, idx) => priorObj[idx] = n);

while(1) {
    if(typeof priorities[0] === "string") {
        if(parseInt(priorities[0]) != sortedpriorities[0]) {
            priorities.push(priorities.shift());
        } else {
            break;
        }
    } else {
        if(priorities[0] != sortedpriorities[0]) {
            priorities.push(priorities.shift());
        } else {
            priorities.shift();
            sortedpriorities.shift();
            count += 1
        }
    }
}

console.log(count);