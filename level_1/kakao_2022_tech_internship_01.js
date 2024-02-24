/**
 * 성격유형 검사하기
 */

// const survey = ["AN", "CF", "MJ", "RT", "NA"];
// const choices = [5, 3, 2, 7, 5];

const survey = ["TR", "RT", "TR"];
const choices = [7, 1, 3];

let answer = "";

let score_total = [];

let score_r = 0;
let score_t = 0;

let score_c = 0;
let score_f = 0;

let score_j = 0;
let score_m = 0;

let score_a = 0;
let score_n = 0;

for (let i = 0; i < survey.length; i++) {
    // choices의 선택이 1,2,3 이면은 survey[i][0]에 플러스점수,
    // 4면 둘다 0
    // 5,6,7 이면 survey[i][1]에 플러스점수,
    if(choices[i] === 1) {
        score_total.push(`${survey[i][0]}3`);
    } else if(choices[i] === 2) {
        score_total.push(`${survey[i][0]}2`);
    } else if(choices[i] === 3) {
        score_total.push(`${survey[i][0]}1`);
    } else if(choices[i] === 4) {
        score_total.push(`0`);
    } else if(choices[i] === 5) {
        score_total.push(`${survey[i][1]}1`);
    } else if(choices[i] === 6) {
        score_total.push(`${survey[i][1]}2`);
    } else if(choices[i] === 7) {
        score_total.push(`${survey[i][1]}3`);
    }
}

for (let i = 0; i < score_total.length; i++) {
    // 순서대로 보면서 점수 정산
    if(score_total[i][0] === `R`) {
        score_r += parseInt(score_total[i][1]);
    } else if(score_total[i][0] === `T`) {
        score_t += parseInt(score_total[i][1]);
    } else if(score_total[i][0] === `C`) {
        score_c += parseInt(score_total[i][1]);
    } else if(score_total[i][0] === `F`) {
        score_f += parseInt(score_total[i][1]);
    } else if(score_total[i][0] === `J`) {
        score_j += parseInt(score_total[i][1]);
    } else if(score_total[i][0] === `M`) {
        score_m += parseInt(score_total[i][1]);
    } else if(score_total[i][0] === `A`) {
        score_a += parseInt(score_total[i][1]);
    } else if(score_total[i][0] === `N`) {
        score_n += parseInt(score_total[i][1]);
    }
}

if(score_r >= score_t) {
    answer += "R";
} else {
    answer += "T";
}

if(score_c >= score_f) {
    answer += "C";
} else {
    answer += "F";
}

if(score_j >= score_m) {
    answer += "J";
} else {
    answer += "M";
}

if(score_a >= score_n) {
    answer += "A";
} else {
    answer += "N";
}

console.log(answer);
// 정답