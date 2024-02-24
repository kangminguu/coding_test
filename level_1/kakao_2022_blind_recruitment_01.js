// /**
//  * 신고 결과 받기
//  */

const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];
const k = 2;

/**
 * 각 유저 별 신고당한 횟수
 * 중복 제거 먼저
 */

let co_report = report.sort(); // report 정렬

let del_co_report = [];
co_report.map((element, index, array) => { // 중복 제거 및 신고당한 유저 리스트
    if(element != array[index+1]) {
        del_co_report.push(element.split(` `)[1]);
    }
});

let del_co_report2 = [];
co_report.map((element, index, array) => { // 중복 제거
    if(element != array[index+1]) {
        del_co_report2.push(element);
    }
});

// 유저 별 신고당한 횟수 구하기
let reported_id = {}; //  { 이름: 신고당한횟수, }

for(let i of id_list) { // key 값 넣기
    reported_id[i] = 0;
}

for(let i of del_co_report) { // value 값 넣기
    reported_id[i] += 1;
}
// console.log(reported_id);

// 정지당한 유저 구하기
let stoped_id = [];

for(let i of id_list) {
    if(reported_id[i] >= k) {
        stoped_id.push(i);
    }
}

// console.log(stoped_id);
// console.log(del_co_report2);

let last_report = {};
for(let i of id_list) { // key 값 넣기
    last_report[i] = 0;
}

for(let i of del_co_report2) {
    if(stoped_id.includes(i.split(` `)[1])) {
        last_report[i.split(` `)[0]] += 1;
    }
} //이중for문 안쓰러고 더럽게 includes()함수 찾아봄

// for(let i of del_co_report2) {
//     for(let s of stoped_id) {
//         if(i.split(` `)[1] === s) {
//             last_report[i.split(` `)[0]] += 1;
//         }
//     }
// }

console.log(Object.values(last_report));

/**
 * 다른사람의 풀이, map과 set 활용
 */

// function solution(id_list, report, k) {
//     // let reports = [...new Set(report)].map(a=>{return a.split(' ')});
//     // let counts = new Map();
//     // for (const bad of reports){
//     //     counts.set(bad[1],counts.get(bad[1])+1||1)
//     // }
//     // let good = new Map();
//     // for(const report of reports){
//     //     if(counts.get(report[1])>=k){
//     //         good.set(report[0],good.get(report[0])+1||1)
//     //     }
//     // }
//     // let answer = id_list.map(a=>good.get(a)||0)
//     // return answer;

//     let s_report = new Set(report);
//     // let n_report = [ ...s_report ].map((a) => {
//     //     return a.split(` `);
//     // });

//     let n_report = new Map();
//     console.log(n_report);

//     return s_report;
// }

// let answer = solution(
//     ["muzi", "frodo", "apeach", "neo"],
//     ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],
//     2
// );

// console.log(answer);

// const arr = ["a", "b", "c", "c", "c", "a", "b"];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];

// let setArr = [ ...new Set(arr) ];

// let dicArr = {};
// for(let i in arr) {
//     dicArr[arr2[i]] = arr[i];
// }

// console.log(setArr);

// console.log(dicArr);
