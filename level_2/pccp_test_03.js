/**
 * [PCCP 기출문제] 3번 / 아날로그 시계
 */

function solution(h1, m1, s1, h2, m2, s2) {
    var answer = -1;

    //h1:m1:s1 부터 h2:m2:s2 까지 지난 시간
    let passH;
    let passM;
    let passS;

    if(s1 <= s2) {
        passS = s2 - s1;

        if(m1 <= m2) {
            passM = m2 - m1;
            passH = h2 - h1;
        } else {
            passM = (60 - m1) + m2;
            passH = h2 - h1 - 1;
        }
    } else {
        passS = (60 - s1) + s2;

        if(m1 < m2) {
            passM = m2 - m1 - 1;
            passH = h2 - h1;
        } else {
            passM = (60 - m1) + m2 - 1;
            passH = h2 - h1 - 1;
        }
    }

    let totalPassS = passH*60*60 + passM*60 + passS;

    // console.log(totalPassS);
    // console.log(`${passH}:${passM}:${passS}`);

    let degreeS = 6; // 1초당 초침 움직이는 각도
    let degreeM = 1/10; // 1초당 분침 움직이는 각도
    let degreeH = 1/120; // 1초당 시침 움직이는 각도

    let degreeS1 = s1 * degreeS;
    let degreeM1 = m1 * degreeM;
    let degreeH1 = h1 * degreeH;

    console.log(degreeS1);
    console.log(degreeM1);
    console.log(degreeH1);

    return answer;
}

solution(0, 5, 30, 0, 7, 0);