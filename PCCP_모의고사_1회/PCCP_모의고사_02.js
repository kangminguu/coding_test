/**
 * [PCCP 모의고사 #1] 2번 - 체육대회
 */

function solution(ability) {
    var answer = 0;

    /**
     * 누구 한명이 테니스를 맡는경우 나머지 4명중 한명 3명중 한명
     * 5 x 4 x 3 = 60가지 경우
     */

    /**
     * (0, 0) 택
     * (n, 0)은 모두 제외, (0, m)도 제외
     * (m, n)을 선택한 경우 그점을 기준으로 가로 세로 제외
     */

    /**
     * 그렇다면 가능한 나올수 있는 합의 조합은
     */

    for(let m = 0; m < ability.length; m++) {
        for(let n = 0; n < ability[0].length; n++) {
            // 기준이 되는 값
            // 기준 되는 값 가로 세로는 더할 수 없음
            
        }
    }

    return answer;
}

let ability = [[40, 10, 10], [20, 5, 0], [30, 30, 30], [70, 0, 70], [100, 100, 100]];

console.log(solution(ability));