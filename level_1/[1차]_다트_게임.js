function solution(dartResult) {
    var answer = 0;
    return answer;
}

const dartResult = 	'1D2S#10D';

// const result = [];
// let div = dartResult.split("S").join(".").split("D").join(".").split("T").join(".").split("*").join(".").split("#").join(".").split(".");
// div.forEach(n => {
//     if(n != "") result.push(n);
// });

// let firstScore = result[0];
// let secondScore = result[1];
// let thirdScore = result[2];

const arr = ["", "", ""];

const resultArr = [ ...dartResult ];

let i = 0
resultArr.forEach((n, idx) => {
    arr[i] += n;
    // if() i++;
});

console.log(typeof "1");
console.log(typeof "T");