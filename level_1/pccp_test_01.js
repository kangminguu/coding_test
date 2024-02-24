/**
 * [PCCP 기출문제] 1번 / 붕대 감기
 */

function solution(bandage, health, attacks) {
    var answer = 0;

    const bandTIme = bandage[0];
    const healPerSec = bandage[1];
    const extraHeal = bandage[2];

    const attackLog = {}
    attacks.map((n) => {
        attackLog[n[0]] = n[1];
    }); // 시간 별 공격 기록

    const maxTime = attacks[attacks.length-1][0]; // 총 공격 시간
    let lastAttackTime = 1; // 마지막 공격 후 초 카운트

    let hp = health; // 현재 체력

    for(let sec = 1; sec < maxTime+1; sec++) { // 초당 현재 체력 구하기
        if(attackLog[sec] != null) { // sec 해당 초에 공격이 있는 경우
            hp -= attackLog[sec];
            lastAttackTime = 1;
        } else {
            if((hp + healPerSec) < health) { // 초당 기본 회복인데 최대체력을 고려해서
                hp += healPerSec;
                if(hp > health) {
                    hp = health;
                }
            } else { // 최대 체력을 넘기는 경우
                hp = health;
            }
            
            if(lastAttackTime === bandTIme) { // 추가 회복 여부
                hp += extraHeal;
                if(hp > health) { // 최대 체력을 넘기는 경우
                    hp = health;
                }
                lastAttackTime = 1;
            } else {
                lastAttackTime += 1;
            }
        }

        console.log(`${sec}시간, ${hp} hp, 연속공격 ${lastAttackTime}`);

        if(hp <= 0) {
            hp = -1;
            break;
        }
    }

    answer = hp;

    return answer;
}

// let result = solution([5, 1, 5], 30, [[2, 10], [9, 15], [10, 5], [11, 5]]);

// let result = solution([3, 2, 7], 20, [[1, 15], [5, 16], [8, 6]]);

// let result = solution([4, 2, 7], 20, [[1, 15], [5, 16], [8, 6]]);

// let result = solution([1, 1, 1], 5, [[1, 2], [3, 2]]);

// let result = solution( // 최대 체력을 넘겨서 추가 회복하는 경우
//     [1, 1, 10], 
//     10, 
//     [[1, 9], [3, 1]], 
// ); 

let result = solution(
    [1, 10, 1], 
    10, 
    [[1, 9], [3, 9]], 
);

console.log(result);