const strings = ["abce", "abcd", "cdx"];
const n = 2;

// console.log(strings.sort((a, b) => {
//     if (a[n] === b[n]) {
//         return (a < b) ? -1 : 1;
//     } else {
//         return (a[n] < b[n]) ? -1 : 1;
//     }
// }));

console.log(strings.sort((a, b) => (a[n] === b[n]) ? ((a < b) ? -1 : 1 ) : ((a[n] < b[n]) ? -1 : 1)));