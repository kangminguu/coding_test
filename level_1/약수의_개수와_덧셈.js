const left = 13;
const right = 17;

const find약수 = n => {
    let 약수 = 0;
    for (let i = 1; i <= n; i++) {
        if (!(n % i)) 약수++;
    }
    
    return 약수;
}

let sum = 0;
for (let num = left; num <= right; num++) (find약수(num) % 2) ? sum -= num : sum += num;

console.log(sum);

// 제곱근이 정수면 약수의 개수가 홀수다