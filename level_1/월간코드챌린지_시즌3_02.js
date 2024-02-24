/**
 * 없는 숫자 더하기
 */

function solution(numbers) {
    var answer = 0;

    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    nums.map((n) => {
        if(!numbers.includes(n)) answer += n;
    });

    return answer;
}

function solution2(numbers) { // 전체 합(1~9)으로 계산하면 간단
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

console.log(solution([1,2,3,4,6,7,8,0]));

console.log(solution([5,8,4,0,6,7,9]));