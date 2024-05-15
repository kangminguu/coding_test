/**
 * 연속해서 같은 발음 못함
 */

// function solution(babbling) {
//     var answer = 0;
//     const pronunciations = {
//         "aya": 1, 
//         "ye": 2, 
//         "woo": 3, 
//         "ma": 4
//     };
//     const sequentialNum = ["00", "11", "22", "33"];

//     let answerArray = [];
//     answerArray = changeBablingToNumber(babbling, pronunciations);
//     answerArray = checkOnlyNumber(answerArray);
//     answerArray = answerArray.map(n => {
//         sequentialNum.forEach(m => {
//             n = n.replaceAll(m, "@");
//         });
//         return n;
//     });
//     answerArray = checkOnlyNumber(answerArray);

//     answerArray.forEach(n => n === "" ? null : answer++);

//     return answer;
// }

// function checkOnlyNumber(array) {
//     return array.map(n => Number(n)/1 ? n : "");
// }

// function changeBablingToNumber(babbling, pronunciations) {
//     return babbling.map((bab) => {
//         Object.keys(pronunciations).forEach(pronunc => {
//             bab = bab.replaceAll(pronunc, pronunciations[pronunc]);
//         });
//         return bab;
//     });
// }

function solution(babbling) {
    var answer = 0;
    const pronunciations = {
        "aya": 1, 
        "ye": 2, 
        "woo": 3, 
        "ma": 4
    };
    const sequentialNum = ["00", "11", "22", "33"];

    let answerArray = [];
    answerArray = changeBablingToNumber(babbling, pronunciations);
    console.log(answerArray);
    answerArray = checkOnlyNumber(answerArray);
    answerArray = answerArray.map(n => {
        sequentialNum.forEach(m => {
            n = n.replaceAll(m, "@");
        });
        return n;
    });
    answerArray = checkOnlyNumber(answerArray);

    // answerArray.forEach(n => n === "" ? null : answer++);

    // return answer;
}

function checkOnlyNumber(array) {
    return array.map(n => Number(n)/1 ? n : "");
}

function changeBablingToNumber(babbling, pronunciations) {
    return babbling.map((bab) => {
        Object.keys(pronunciations).forEach(pronunc => {
            bab = bab.replaceAll(pronunc, pronunciations[pronunc]);
        });
        return bab;
    });
}

let babbling = ["ayaaya", "yeye", "woowoo", "mama"];

solution(babbling);
// console.log(solution(babbling));

// 14, 17, 18