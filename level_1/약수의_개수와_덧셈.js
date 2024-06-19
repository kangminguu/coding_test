const left = 13;
const right = 17;

function solution(left, right) {
    const findYagsu = n => {
        let yagsu = 0;

        for (let i = 1; i <= n; i++) {
            if (!(n % i)) yagsu++;
        }

        return yagsu;
    }

    let sum = 0;

    for (let num = left; num <= right; num++) {
        (findYagsu(num) % 2) ? sum -= num : sum += num;
    }

    return sum;
}

console.log(solution(left, right));

// 제곱근이 정수면 약수의 개수가 홀수다