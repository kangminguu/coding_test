let numbers = [30, 34, 5, 3, 9];

// let answer = "";

// const len = numbers.length;

const maxLenNum = Math.max(...numbers.map(n => n.toString().length));

// // numbers.sort().reverse();

// let arr = [];

// const obj = {
//     1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []
// }

// numbers.forEach(n => {
//     obj[n.toString()[0]].push(n);
// });

// Object.keys(obj).forEach(n => {
//     if(obj[n].length > 1) {

//     }
// })

numbers = numbers.map((n, idx) => {
    while(n.toString().length != maxLenNum) {
        n = "0" + n;
    }
    return n.toString();
});

// numbers.sort((a, b) => b[maxLenNum-1] - a[maxLenNum-1]);
// numbers.sort((a, b) => b.toString()[maxLenNum-2] - a.toString()[maxLenNum-2]);

console.log(numbers);