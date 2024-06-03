function solution(n, arr1, arr2) {
    let answer = [];

    for(let i = 0; i < n; i++) {
        const line1 = makeBinNum(arr1[i], n);
        const line2 = makeBinNum(arr2[i], n);
        
        answer[i] = "";

        for(let s = 0; s < n; s++) {
            answer[i] += ((line1[s] === "0" && line2[s] === "0") ? " " : "#");
        }
    }

    return answer;
}

// const n = 5;
// const arr1 = [9, 20, 28, 18, 11];
// const arr2 = [30, 1, 21, 17, 28];

const n = 6;
const arr1 = [46, 33, 33 ,22, 31, 50];
const arr2 = [27 ,56, 19, 14, 14, 10];

function makeBinNum(num, n) {
    let binNum = ""
    let oriNum = num;
    for(let i = 0; i < n; i++) {
        binNum = ((oriNum % 2) ? "1" : "0") + binNum;
        oriNum = Math.floor(oriNum/2);
    }
    return binNum;
}

function solution2(n, arr1, arr2) {
    return arr1.map((v, i) => {

        // console.log((v | arr2[i]).toString(2));

        return addZero(
            n, (v | arr2[i]).toString(2)
        ).replace(/1|0/g, a => +a ? '#' : ' ');
    });
}

const addZero = (n, s) => {
    const a = '0'.repeat(n - s.length) + s;
    return a;
}

// console.log(solution2(n, arr1, arr2));

// console.log(solution(n, arr1, arr2));

console.log((100).toString(2));
console.log((12).toString(2));
console.log(("12" | "100").toString(2));