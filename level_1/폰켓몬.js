// const nums = [3,1,2,3];
const nums = [3,3,3,2,2,4];
// // const nums = [3,3,3,2,2,2];

// const maxPickedCount = nums.length/2;

// // const ponketmon = {};
// // nums.forEach((value, index) => {
// //     ponketmon[index] = value;
// // });
// let answer;

// const countOfPonketmon = [ ...new Set(nums) ].length;



// if(maxPickedCount > countOfPonketmon)
//     answer = countOfPonketmon;
// else
//     answer = maxPickedCount;

// console.log(answer);

function solution(nums) {
    const maxPickedCount = nums.length/2;
    const countOfPonketmon = [ ...new Set(nums) ].length;
    
    return (maxPickedCount > countOfPonketmon) ? countOfPonketmon : maxPickedCount;
}

console.log(solution(nums));