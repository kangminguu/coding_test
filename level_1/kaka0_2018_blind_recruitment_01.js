/**
 * [1차] 다트 게임
 */

function solution(dartResult) {
    var answer = 0;

    let arrDartResult = [ ...dartResult ];

    const numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    let targetNum = "";

    let arrResult = [];

    arrDartResult.map((element, n) => {
        if(numArray.includes(element)) {
            targetNum += element;
        } else {
            if(numArray.includes(arrDartResult[n+1])) {
                targetNum += element;
                arrResult.push(targetNum);
                targetNum = "";
            } else if (arrDartResult[n+1] === undefined) {
                targetNum += element;
                arrResult.push(targetNum);
            } else {
                targetNum += element;
            }
        }
    });

    for(let i in arrResult) {
        if(arrResult[i]) {}
    }

    return answer;
}

// console.log(solution(`1S2D*3T`));
console.log(solution(`1D2S#10S`));
// console.log(solution(`1D2S0T`));
// console.log(solution(`1S*2T*3S`));
// console.log(solution(`1D#2S*3S`));
// console.log(solution(`1T2D3D#`));
// console.log(solution(`1D2S3T*`));
