let lottos, win_nums;

lottos = [0, 0, 0, 0, 5, 6];
win_nums = 	[38, 19, 20, 40, 15, 25];

const obj = { sameNumber: 0, zeroCount: 0 }
const answer = [];

lottos.forEach(n => {
    if (win_nums.includes(n)) obj.sameNumber++;
    if (n === 0) obj.zeroCount++;
});

switch (obj.sameNumber) {
    case 0:
        answer[0] = (obj.zeroCount) ? (7 - obj.zeroCount) : 6;
        answer[1] = 6;
        break;
    case 1:
        answer[0] = 6 - obj.zeroCount;
        answer[1] = 6;
        break;
    case 2:
        answer[0] = 5 - obj.zeroCount;
        answer[1] = 5;
        break;
    case 3:
        answer[0] = 4 - obj.zeroCount;
        answer[1] = 4;
        break;
    case 4:
        answer[0] = 3 - obj.zeroCount;
        answer[1] = 3;
        break;
    case 5:
        answer[0] = 2 - obj.zeroCount;
        answer[1] = 2;
        break;
    case 6:
        answer[0] = 1 - obj.zeroCount;
        answer[1] = 1;
}

console.log(obj);
console.log(answer);