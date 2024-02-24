/**
 * 가장 많이 받은 선물
 */

function solution(friends, gifts) {
    var answer = 0;

    const dic_howManyGift = {}; // 선물 지수
    friends.map((element, num, arr) => {
        dic_howManyGift[element] = 0;
    });

    gifts.map((element, num, arr) => {
        dic_howManyGift[element.split(` `)[0]] += 1;
        dic_howManyGift[element.split(` `)[1]] -= 1;
    });

    const dic_giveAndTake = {}; // 선물 주고 받는 모든 경우

    friends.map((element1, num, arr) => {
        friends.map((element2, num, arr) => {
            if(element1 != element2) {
                dic_giveAndTake[`${element1} ${element2}`] = 0;
            }
        });
    });


    gifts.map((element, num, arr) => { // 카운트
        dic_giveAndTake[element] += 1;
    });

    // console.log(dic_giveAndTake);
    console.log(dic_howManyGift);

    const dic_willGetGift = {}; // 다음달에 받을 선물 개수
    friends.map((element, num, arr) => {
        dic_willGetGift[element] = 0;
    });

    let sameGiveAndTake = [];

    for(let i in dic_giveAndTake) { // 주고 받은 선물 개수가 같거나 0인 경우는 제외
        if(dic_giveAndTake[i] > dic_giveAndTake[`${i.split(` `)[1]} ${i.split(` `)[0]}`]) {
            dic_willGetGift[i.split(` `)[0]] += 1;
        } else if(dic_giveAndTake[i] === dic_giveAndTake[`${i.split(` `)[1]} ${i.split(` `)[0]}`]) {
            if(sameGiveAndTake.includes(`${i.split(` `)[1]} ${i.split(` `)[0]}`)) {

            } else {
                sameGiveAndTake.push(i);
            }
        }
    }

    for(let i of sameGiveAndTake) { // 같거나 0인 경우 선물지수 비교
        if(dic_howManyGift[i.split(` `)[0]] > dic_howManyGift[i.split(` `)[1]]) {
            dic_willGetGift[i.split(` `)[0]] += 1;
        } else if(dic_howManyGift[i.split(` `)[0]] < dic_howManyGift[i.split(` `)[1]]) {
            dic_willGetGift[i.split(` `)[1]] += 1;
        }
    }

    let a = Object.values(dic_willGetGift).sort();
    answer = a[a.length-1];
    console.log(answer);

    return answer;
}

// const result01 = solution(
//     ["muzi", "ryan", "frodo", "neo"],
//     ["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"],
// );

// const result02 = solution(
//     ["joy", "brad", "alessandro", "conan", "david"],
//     ["alessandro brad", "alessandro joy", "alessandro conan", "david alessandro", "alessandro david"],
// );

// const result03 = solution(
//     ["a", "b", "c"],
//     ["a b", "b a", "c a", "a c", "a c", "c a"],
// );

solution(
    ["a", "b", "c"],
    [
        "a b",
        "a c",
        "b c",
        "b c",
        "b c",
        "b c",
        "b c",
        "b c",
        "b c",
        "b c",
        "b c",
        "b c",
        "b c",
        "b c",
        "b c",
        "b c",
        "b c",
        "c a",
      ]
);

// console.log(result01);
// console.log(result02);
// console.log(result03);
