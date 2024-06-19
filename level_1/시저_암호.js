const s = "z";
const n = 1;

const alphabet_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphabet_lower = "abcdefghijklmnopqrstuvwxyz";

const a = s.split("").reduce((pre, cur) => {
    if (cur === " ") {
        return pre + cur;
    } else if (cur === cur.toLowerCase()) {
        return pre + alphabet_lower[(alphabet_lower.indexOf(cur) + n)%26];
    } else {
        return pre + alphabet_upper[(alphabet_upper.indexOf(cur) + n)%26];
    }
},"");

console.log(a);