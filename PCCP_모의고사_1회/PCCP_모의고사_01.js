/**
 * [PCCP 모의고사 #1] 1번 - 외톨이 알파벳
 */

function solution(input_string) {
    var answer = '';

    let strSet = [ ...new Set(input_string) ];

    let lonely = [];

    console.log(strSet);

    let str = "@" + input_string + "@";

    strSet.map((n) => {
        let a = [];

        str.split(n).map((m) => {
            if(m != "") a.push(m);
        });

        if(a.length != 2) lonely.push(n);
    });

    lonely.sort();
    lonely.map((n) => {
        answer += n;
    });

    if(lonely.length === 0) answer = "N";

    return answer;
}

let re1 = solution("edeaaabbccd");
let re2 = solution("eeddee");
let re3 = solution("string");
let re4 = solution("zbzbz");

console.log(re1);
console.log(re2);
console.log(re3);
console.log(re4); // 정답