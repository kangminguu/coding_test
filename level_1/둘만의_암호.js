const s = "aukks";
const skip = "wbqd";
const index = 5;
// z= 122
const changeStrToNum = str => str.charCodeAt();
const changeNumToStr = num => String.fromCharCode(num);

const skipAlphabet = s => {
    let str = changeNumToStr((changeStrToNum(s) + 1) > 122 ? (changeStrToNum(s) - 25) : (changeStrToNum(s) + 1));
    return (skip.includes(str)) ? skipAlphabet(str) : str;
};

const answer = [ ...s ].map(string => {
    for(let i = 0; i < index; i++) string = skipAlphabet(string);
    return string;
});

console.log(answer.join(""));