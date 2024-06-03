function solution(dartResult) {
    var answer = 0;
    return answer;
}

const dartResult = '1D2S3T*';

const resultArr = [ ...dartResult ];
const result = ["", "", ""];

let i = 0
resultArr.forEach((n, idx) => {
    if(parseInt(resultArr[idx]).toString() === "NaN" && parseInt(resultArr[idx+1]).toString() != "NaN") {
        result[i] += n;
        i++;
    } else {
        result[i] += n;
    }
});

console.log(result);

function getScore(chance) {
    let score = chance.replace("S", "").replace("D", "").replace("T", "").replace("*", "").replace("#", "");
    const bonus = chance.replace(score, "").replace("*", "").replace("#", "");
    const option = chance.replace(score, "").replace(bonus, "");

    switch(bonus) {
        case "S":
            break;
        case "D":
            score = score*score;
            break;
        case "T":
            score = score*score*score;
            break;
    }

    return [score, option];
}

result[0] = getScore(result[0]);
result[1] = getScore(result[1]);
result[2] = getScore(result[2]);

switch(result[2][1]) {
    case "*":
        result[2][0] = result[2][0] * 2;
        result[1][0] = result[1][0] * 2;
        break;
    case "#":
        result[2][0] = result[2][0] * (-1);
        break;
}

switch(result[1][1]) {
    case "*":
        result[1][0] = result[1][0] * 2;
        result[0][0] = result[0][0] * 2;
        break;
    case "#":
        result[1][0] = result[1][0] * (-1);
        break;
}

switch(result[0][1]) {
    case "*":
        result[0][0] = result[0][0] * 2;
        break;
    case "#":
        result[0][0] = result[0][0] * (-1);
        break;
}

const finalScore = parseInt(result[0][0]) + parseInt(result[1][0]) + parseInt(result[2][0]);

console.log(finalScore);