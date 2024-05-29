const priorities = [1, 1, 9, 1, 1, 1];
const location = 0;
// const sortedpriorities = [ ...priorities ].sort((a, b) => b-a);

// priorities[location] += "#";
// let count = 1;
// // const priorObj = {};
// // priorities.forEach((n, idx) => priorObj[idx] = n);

// while(1) {
//     if(typeof priorities[0] === "string") {
//         if(parseInt(priorities[0]) != sortedpriorities[0]) {
//             priorities.push(priorities.shift());
//         } else {
//             break;
//         }
//     } else {
//         if(priorities[0] != sortedpriorities[0]) {
//             priorities.push(priorities.shift());
//         } else {
//             priorities.shift();
//             sortedpriorities.shift();
//             count += 1
//         }
//     }
// }

// console.log(count);

function solution(priorities, location) {
    var arr = priorities.map((priority, index) => {
        return {
            index: index, priority: priority
        };
    });

    console.log(arr);

    var queue = [];

    while(arr.length > 0) {
        var firstEle = arr.shift();
        var hasHighPriority = arr.some(ele => ele.priority > firstEle.priority);
        if (hasHighPriority) {
            arr.push(firstEle);
        } else {
            queue.push(firstEle);
        }
    }
    console.log(arr);
    console.log(queue);

    return queue.findIndex(queueEle => queueEle.index === location) + 1;
}

solution(priorities, location);