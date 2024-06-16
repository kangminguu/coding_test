/**
 * 두 사람이 선물 기록이 있다. 더 많이 준 사람이 하나 더 받는다
 * 
 * 기록이 없거나 같다면, 선물지수가 더 큰사람이 하나 더 받는다
 *  = 기록이 없거나 같다면, 준 선물이 많은 사람이 하나 더 받는다.
 * 
 * 선물지수는 준선물 - 받은선물 = 준 선물이 더 많다.
 * 
 * 선물지수도 같으면 주고받지 않는다.
 * 
 * 이때 가장 선물을 많이 받는 사람
 */

let friends, gifts;

// friends = ["muzi", "ryan", "frodo", "neo"];
// gifts = ["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"];

friends = ["joy", "brad", "alessandro", "conan", "david"]
gifts = ["alessandro brad", "alessandro joy", "alessandro conan", "david alessandro", "alessandro david"]

// friends = ["a", "b", "c"];
// gifts = ["a b", "b a", "c a", "a c", "a c", "c a"];

const giveAndTake = {};
friends.forEach(friend => {
    giveAndTake[friend] = {};
    friends.forEach(friend2 => {
        giveAndTake[friend][friend2] = 0;
    });
});

const nextMonthGift = {}; // 다음달 받을 예상 선물 개수
friends.forEach(friend => nextMonthGift[friend] = 0);

const whoGiveGift = {}; // 누구에게 선물을 줬는지
friends.forEach(friend => whoGiveGift[friend] = []);
gifts.forEach(gift => whoGiveGift[gift.split(" ")[0]].push(gift.split(" ")[1]));

const whotakeGift = {}; // 누구에게 선물을 받았는지
friends.forEach(friend => whotakeGift[friend] = []);
gifts.forEach(gift => whotakeGift[gift.split(" ")[1]].push(gift.split(" ")[0]));

const gisu = {}; // 선물지수
friends.forEach(friend => gisu[friend] = whoGiveGift[friend].length - whotakeGift[friend].length);

gifts.forEach(gift => {
    giveAndTake[gift.split(" ")[0]][gift.split(" ")[1]] += 1;
    giveAndTake[gift.split(" ")[1]][gift.split(" ")[0]] -= 1;
});

friends.forEach(friend => {
    friends.forEach(friend2 => {
        if (friend != friend2) {
            if (giveAndTake[friend][friend2] > 0) {
                nextMonthGift[friend]++;
            } else if (giveAndTake[friend][friend2] === 0) {
                if (gisu[friend] > gisu[friend2]) {
                    nextMonthGift[friend]++;
                }
            }
        }
    });
});

console.log(Math.max(...Object.values(nextMonthGift)));