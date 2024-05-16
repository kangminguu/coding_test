const clothes = [
    ["a", "headgear"], 
    ["b", "headgear"], 
    ["c", "eyewear"], 
    ["d", "eyewear"], 
    ["e", "face"], 
    ["f", "face"],
];

const objClothes = {};
clothes.forEach(arr => objClothes[[ ...arr ].pop()] = 0);
clothes.forEach(arr => objClothes[arr[1]]++);

const kindOfClothes = Object.keys(objClothes);
const len = Object.keys(objClothes).length;

let combin = {};

// function findCombin() {
//     for(let i = len; i > 1; i--) {
//         combin[] = 0
//     }
// }

console.log(kindOfClothes);

// const clothes = [
//     ["yellow_hat", "headgear"], 
//     ["blue_sunglasses", "eyewear"], 
//     ["green_turban", "headgear"]
// ];


// const objClothes = {};
// clothes.forEach(arr => objClothes[[ ...arr ].pop()] = 0);
// clothes.forEach(arr => objClothes[arr[1]]++);

// console.log(objClothes);

// let combinClothes;
// if(Object.values(objClothes).length === 1) 
//     combinClothes = 0;
// else
//     combinClothes = Object.values(objClothes).reduce((acc, cur) => acc * cur, 1);

// const eachClothes = Object.values(objClothes).reduce((acc, cur) => acc + cur, 0);

// return combinClothes + eachClothes;


// function solution(clothes) {
//     const objClothes = {};
//     clothes.forEach(arr => objClothes[[ ...arr ].pop()] = 0);
//     clothes.forEach(arr => objClothes[arr[1]]++);

//     console.log(objClothes);

//     let combinClothes, eachClothes;

//     if(Object.values(objClothes).length === 1) {
//         combinClothes = 0;
//     } else {
//         // combinClothes = Object.values(objClothes).reduce((acc, cur) => acc * cur, 1);
//         const len = Object.values(objClothes).length;
//         for(let i = len; i > 1; i--) {
            
//         }
//     }

//     eachClothes = Object.values(objClothes).reduce((acc, cur) => acc + cur, 0);

//     console.log(combinClothes);
//     console.log(eachClothes);

//     return combinClothes + eachClothes;
// }

// console.log(solution(clothes));