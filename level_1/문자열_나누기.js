const s = "aa";

let 분리된문자열 = s[0];
let 같은거개수 = 1;
let 다른거개수 = 0;

const 배열 = [];

const len = s.length;
for (let i = 1; i < len; i++) {
    if (같은거개수 === 다른거개수) {
        배열.push(분리된문자열);
        분리된문자열 = s[i];
        같은거개수 = 1;
        다른거개수 = 0;
    } else {
        (s[i] === 분리된문자열[0]) ? 같은거개수++ : 다른거개수++;
        분리된문자열 += s[i];
    }

    if (i === len - 1) 배열.push(분리된문자열);
}

// console.log((배열.length) ? 배열.length : 1);

console.log(배열.length);