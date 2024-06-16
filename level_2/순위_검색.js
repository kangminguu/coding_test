const info = [
    "java backend junior pizza 150",
    "python frontend senior chicken 210",
    "python frontend senior chicken 150",
    "cpp backend senior pizza 260",
    "java backend junior chicken 80",
    "python backend senior chicken 50"
];

const query = [
    "java and backend and junior and pizza 100",
    "python and frontend and senior and chicken 200",
    "cpp and - and senior and pizza 250",
    "- and backend and senior and - 150",
    "- and - and - and chicken 100",
    "- and - and - and - 150"
];

const each_info = info.map(n => n.split(" "));
const each_query = query.map(n => [n.split(" ")[0], n.split(" ")[2], n.split(" ")[4], n.split(" ")[6], n.split(" ")[7]]);
const result = [];
const len = query.length;

console.log(each_query);

// for (let i = 0; i < len; i++) {
//     for (let s = 0; s < 5; s++) {
//         if (each_info)
//     }
// }