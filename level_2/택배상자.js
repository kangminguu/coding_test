const order = [4, 3, 1, 2, 5];

function solution(order) {
    var answer = 0;
    return answer;
}



// let container = [];
// const extraContainer = [];
// const answerContainer = [];
// let n = 0;

// console.log(solution(order));

// function solution(order) {
//     container = [ ...order ].sort((a, b) => a-b);
//     while(1) {
//         repeat(order);
//         if(container[0] === "end") break;
//     }
    
//     return answerContainer.length;
// }

// function repeat(order) {
//     if(order[n] === container[0]) {
//         putanswerContainer();
//     } else if(order[n] === extraContainer[0]) {
//         putExtraToAnswerContainer();
//     } else {
//         putExtraContainer();
//     }
// }

// function putExtraContainer() {
//     if(container[0] != undefined)
//         extraContainer.unshift(container.shift());
//     else
//         container.push("end");
// }

// function putanswerContainer() {
//     if(container[0] != undefined) {
//         answerContainer.push(container.shift());
//         n += 1;
//     } else
//         container.push("end");
// }

// function putExtraToAnswerContainer() {
//     answerContainer.push(extraContainer.shift());
//     n += 1;
// }
