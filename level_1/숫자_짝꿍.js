// const x = "100";
// const y = "123450";
const X = "12321";
const Y = "42531";

function solution(X, Y) {
    const objNum = {};
    let answer = "";
    
    for (let i = 0; i < 10; i++) {
        const xContain = X.split(i).length;
        const yContain = Y.split(i).length;
        if (xContain > 1 && yContain > 1) objNum[i] = Math.min(xContain-1, yContain-1);
    }

    const keys = Object.keys(objNum);
    keys.reverse().forEach(n => {
        for(let i = 0; i < objNum[n]; i++) answer += n;
    });
    
    switch (keys.length) {
        case 0: return "-1";
        case 1: return (Object.keys(objNum)[0] === "0") ? "0" : answer;
        default: return answer;
    }
}

console.log(solution(X, Y))