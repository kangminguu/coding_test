// function solution(s){
//     return (splitAndJoin(s) === "") ? true : false ;
// }

// function splitAndJoin(s) {
//     let curS = s;
//     s = s.split("()").join("");
//     return (curS === s) ? s : splitAndJoin(s);
// }

// function solution(s){
//     const arrL = [];
//     const arrR = [];
//     const arrC = [];
    
//     [ ...s ].forEach(n => {
//         if(n === "(") {
//             arrL.push("(");
//         } else {
//             if(arrL.length === 0) {
//                 arrR.push(")");
//             } else {
//                 arrC.push(arrL.pop()+")");
//             }
//         }
//     });
    
//     return arrL.length === 0 && arrR.length === 0 ? true : false;
// }

function solution(s){
    let cum = 0
    for (let paren of s) {
        cum += (paren === '(') ? 1 : -1;
        if(cum < 0) {
            return false
        }
    }
    return (cum === 0) ? true : false;
}

solution("()()");