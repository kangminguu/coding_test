/**
 * [PCCP 기출문제] 2번 / 석유 시추
 */

function solution(land) {
    var answer = 0;
    return answer;
}

solution(
    [
        [0, 0, 0, 1, 1, 1, 0, 0], 
        [0, 0, 0, 0, 1, 1, 0, 0], 
        [1, 1, 0, 0, 0, 1, 1, 0], 
        [1, 1, 1, 0, 0, 0, 0, 0], 
        [1, 1, 1, 0, 0, 0, 1, 1]
    ]
);

// solution(
//     [
//         [1, 0, 1, 0, 1, 1], 
//         [1, 0, 1, 0, 0, 0], 
//         [1, 0, 1, 0, 0, 1], 
//         [1, 0, 0, 1, 0, 0], 
//         [1, 0, 0, 1, 0, 1], 
//         [1, 0, 0, 0, 0, 0], 
//         [1, 1, 1, 1, 1, 1]
//     ]
// );


// if(land[Math.abs(h-1)][w] === 1) { // 상
//     dic_mungtang[key].push(`${Math.abs(h-1)}${w}`);

// } else if(land[h+1] != undefined && land[h+1][w] === 1) { // 하
//     dic_mungtang[key].push(`${h+1}${w}`);

// } else if(land[h][Math.abs(w-1)] === 1) { // 좌
//     dic_mungtang[key].push(`${h}${Math.abs(w-1)}`);

// } else if(land[h][w+1] != undefined && land[h][w+1] === 1) { // 우
//     dic_mungtang[key].push(`${h}${w+1}`);

// }