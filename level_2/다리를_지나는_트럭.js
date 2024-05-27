// const bridge_length = 2;
// const weight = 10;
// const truck_weights = [7,4,5,6];

// const onBridge = new Array(bridge_length).fill("");
// // const onBridge = [];
// const passedTruck = [];

// let sec = 0;
// const lenTrunck = truck_weights.length;

// while(passedTruck.length != lenTrunck) {
//     onBridge[bridge_length-1](truck_weights.shift());
//     if(checkWeight()) {
//         moving();
//     } else {

//     }
// }

// function moving() {
//     onBridge.forEach((n, idx) => {
//         onBridge[idx+1] = onBridge[idx];
//     });
// }

// function checkWeight() {
//     return onBridge.reduce((arr, cur) => arr+cur, 0) <= 10;
// }

function solution(spell, dic) {
    const lenSpell = spell.length;
    let answer = 2;
    let filterDic = dic.filter(n => n.length === lenSpell);

    spell.forEach(n => {
        filterDic.forEach((m, idx) => {
            filterDic[idx] = m.replace(n, "");
        });
    });
    
    filterDic.forEach(n => {
        if(n === "") answer = 1;
    });

    return answer;
}

console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]));