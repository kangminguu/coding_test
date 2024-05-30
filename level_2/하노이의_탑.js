const n = 3;
// const n = 2;

const firstPillar = [];
const secondPillar = [];
const thirdPillar = [];

for(let i = 1; i < n+1; i++) {
    firstPillar.push(i);
}

thirdPillar.unshift(firstPillar.shift());   [1, 3]
secondPillar.unshift(firstPillar.shift());  [1, 2]
secondPillar.unshift(thirdPillar.shift());  [3, 2]
thirdPillar.unshift(firstPillar.shift());   [1, 3]

firstPillar.unshift(secondPillar.shift());  [2, 1]    
thirdPillar.unshift(secondPillar.shift());  [2, 3]
thirdPillar.unshift(firstPillar.shift());   [1, 3]

secondPillar.unshift(firstPillar.shift());  [1, 2]
thirdPillar.unshift(firstPillar.shift());   [1, 3]
thirdPillar.unshift(secondPillar.shift());  [2, 3]

console.log(firstPillar, secondPillar, thirdPillar);