/**
 * 실패율
 * 2019 KAKAO BLIND RECRUITMENT
 */

function solution(N, stages) {
    var answer = [];

    let dic_stage = {}
    for(let i = 1; i <= N+1; i++) {
        dic_stage[i] = 0;
    }

    stages.map((stageN) => {
        dic_stage[stageN] += 1;
    });

    // dic_stage : 각 스테이지 별 머물러 있는 사람
    let dic_fail = { ...dic_stage };
    
    let player = stages.length;

    Object.keys(dic_fail).map((n) => {
        // dic_fail[n] = `${dic_stage[n]}/${player}`;
        if(player === 0) {
            dic_fail[n] = 0;
        } else {
            dic_fail[n] = dic_stage[n]/player;
            player -= dic_stage[n];
        }
    });

    delete dic_fail[Object.keys(dic_fail)[Object.keys(dic_fail).length-1]];
    delete dic_stage[Object.keys(dic_stage)[Object.keys(dic_stage).length-1]];

    console.log(dic_fail);
    console.log(dic_stage);

    answer = Object.values(dic_fail).sort().reverse();
    
    Object.keys(dic_stage).map((n) => {
        for(let i = 0; i < answer.length; i++) {
            if(answer[i] === dic_fail[n]) {
                answer[i] = parseInt(n);
                delete dic_fail[n];
            }
        }
    });

    console.log(answer);

    return answer;
}

// solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
// solution(4, [4,4,4,4,4]);

solution(5, [1, 1, 1, 1, 1]);
