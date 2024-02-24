//2023 KAKAO BLIND RECRUITMENT 개인정보 수집 유효 기간

/**
 * 모든 달은 28일로 가정
 * 
 * 오늘 날짜를 의미하는 today
 * 유효기간 문자열 배열 terms
 * 개인정보 문자열 배열 privacies
 * 
 * 파기해야할 개인정보의 번호를 오름차순으로 1차원 배열에 담아 return
 */

// const today = "2022.05.19";
// const terms = ["A 6", "B 12", "C 3"];
// const privacies = ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"];
// // return [1, 3]

const today = "2020.01.01";
const terms = ["Z 3", "D 5"];
const privacies = ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"];

function solution(today, terms, privacies) {
    var answer = [];
    
    let today_dates = (parseInt(today.split(`.`)[0])*12*28) + (parseInt(today.split(`.`)[1])*28) + (parseInt(today.split(`.`)[2]));

    // console.log(`${today_dates}\n==============`);

    for(let i = 0; i < privacies.length; i++) {
        // privacies[i][11] 각 개인정보 별 약관
        for(let s = 0; s < terms.length; s++) {
            // terms[s][0] 약관 종류
            if(privacies[i][11] === terms[s][0]) {
                let addTerm = parseInt(terms[s].split(` `)[1]); // 약관 기간, n달
                addTerm = addTerm*28; //일 로 변경

                let all_dates = addTerm + (parseInt(privacies[i].split(` `)[0].split(`.`)[0])*12*28) + (parseInt(privacies[i].split(` `)[0].split(`.`)[1])*28) + (parseInt(privacies[i].split(` `)[0].split(`.`)[2]));

                // console.log(all_dates);

                if(all_dates <= today_dates) {
                    answer.push(i+1);
                }
            }
        }
    }
    
    return answer;
}

console.log(solution("2020.05.15", ["A 1"], ["2001.01.10 A", "2001.01.10 A"]));
