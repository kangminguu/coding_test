/**
 * [PCCP 기출문제] 2번 / 석유 시추
 */

function solution(land) {
    var answer = 0;

    // 붙어있는 각 덩어리 구하기
    let dic_mungtang = {}
    let mungtang = 1;
    dic_mungtang[mungtang] = [];

    let count = 0;

    // 상하좌우 연결이 없으면 새로운 덩이러 생성 후 추가하기
    for(let h = 0; h < land.length; h++) {
        for(let w = 0; w < land[0].length; w++) {
            if(land[h][w] === 1) {

                Object.values(dic_mungtang).map((arr) => {
                    console.log(dic_mungtang);
                    console.log(arr);
                    if(arr.includes(`${h}${w}`)) {
                        
                        console.log('do this');
                        let Okey = Object.keys(dic_mungtang).find(key => dic_mungtang[key] === `${h}${w}`);

                        if(land[Math.abs(h-1)][w] === 1) { // 상
                            dic_mungtang[Okey].push(`${Math.abs(h-1)}${w}`);
    
                        }
                        if(land[h+1] != undefined && land[h+1][w] === 1) { // 하
                            dic_mungtang[Okey].push(`${h+1}${w}`);
    
                        }
                        if(land[h][Math.abs(w-1)] === 1) { // 좌
                            dic_mungtang[Okey].push(`${h}${Math.abs(w-1)}`);
    
                        }
                        if(land[h][w+1] != undefined && land[h][w+1] === 1) { // 우
                            dic_mungtang[Okey].push(`${h}${w+1}`);
    
                        }
                    } else if(arr === Object.values(dic_mungtang)[Object.values(dic_mungtang).length-1]) {

                        console.log('do that');

                        mungtang += 1;
                        dic_mungtang[mungtang] = [`${h}${w}`];
    
                        if(land[Math.abs(h-1)][w] === 1) { // 상
                            dic_mungtang[mungtang].push(`${Math.abs(h-1)}${w}`);
    
                        }
                        if(land[h+1] != undefined && land[h+1][w] === 1) { // 하
                            dic_mungtang[mungtang].push(`${h+1}${w}`);
    
                        }
                        if(land[h][Math.abs(w-1)] === 1) { // 좌
                            dic_mungtang[mungtang].push(`${h}${Math.abs(w-1)}`);
    
                        }
                        if(land[h][w+1] != undefined && land[h][w+1] === 1) { // 우
                            dic_mungtang[mungtang].push(`${h}${w+1}`);
    
                        }
                    }
                });
            }
            /**
             * 만약 해당 값이 딕셔너리중에 포함되어있으면 포함된 곳에 추가
             * 아니면 새로운 키값 생성 후에 추가
             */
        }
    }

    console.log(dic_mungtang);

    return answer;
}

solution(
    [
        [0, 0, 0, 1, 1, 1, 0, 0], 
        [0, 0, 0, 0, 1, 1, 0, 0], 
        [1, 1, 0, 0, 0, 1, 1, 0], 
        [1, 1, 1, 0, 0, 0, 0, 0], 
        [1, 1, 1, 0, 0, 0, 1, 1]
    ]
);

// solution(
//     [
//         [1, 0, 1, 0, 1, 1], 
//         [1, 0, 1, 0, 0, 0], 
//         [1, 0, 1, 0, 0, 1], 
//         [1, 0, 0, 1, 0, 0], 
//         [1, 0, 0, 1, 0, 1], 
//         [1, 0, 0, 0, 0, 0], 
//         [1, 1, 1, 1, 1, 1]
//     ]
// );


// if(land[Math.abs(h-1)][w] === 1) { // 상
//     dic_mungtang[key].push(`${Math.abs(h-1)}${w}`);

// } else if(land[h+1] != undefined && land[h+1][w] === 1) { // 하
//     dic_mungtang[key].push(`${h+1}${w}`);

// } else if(land[h][Math.abs(w-1)] === 1) { // 좌
//     dic_mungtang[key].push(`${h}${Math.abs(w-1)}`);

// } else if(land[h][w+1] != undefined && land[h][w+1] === 1) { // 우
//     dic_mungtang[key].push(`${h}${w+1}`);

// }