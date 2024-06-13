const answers = [1, 3, 2, 4, 2];

const firstSuPoJa = [1, 2, 3, 4, 5];
const secondSuPoJa = [2, 1, 2, 3, 2, 4, 2, 5];
const thirdSuPoJa = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

const len = answers.length;
const lenFirst = firstSuPoJa.length;
const lenSecond = secondSuPoJa.length;
const lenThird = thirdSuPoJa.length;
const howManyCorrect = [0, 0, 0];
const answerArray = [];

for (let i = 0; i < len; i++) {
    if (answers[i] === firstSuPoJa[i % lenFirst]) howManyCorrect[0] += 1;
    if (answers[i] === secondSuPoJa[i % lenSecond]) howManyCorrect[1] += 1;
    if (answers[i] === thirdSuPoJa[i % lenThird]) howManyCorrect[2] += 1;
}

const bestSocre = Math.max(...howManyCorrect);

console.log(bestSocre);

howManyCorrect.forEach((score, idx) => {
    if (score === bestSocre) answerArray.push(idx + 1);
});

console.log(answerArray);