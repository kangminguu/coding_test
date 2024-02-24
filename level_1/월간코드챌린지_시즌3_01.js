/**
 * 나머지가 1이 되는 수 찾기
 */

function solution(n) {
    var answer = 0;

    let a = [];

    for(let i = n; i > 1; i--) {
        if(n % i === 1) {
            a.push(i);
        }
    }

    a = a.sort((m, n) => {
        return m - n;
    });

    answer = a[0];

    return answer;
}

function solution2(n, x = 1) {  // 굳이 모든 경우의 수를 다 구할 필요 없음
    while (x++) {
        if (n % x === 1) {
            return x;
        }
    }    
}

console.log(solution(13));

console.log(solution2(13));