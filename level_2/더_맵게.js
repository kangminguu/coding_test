const scoville = [1, 2, 3, 9, 10, 12];
const K = 7;

// function solution(scoville, K) {
//     const newFoodScoville = [ ...scoville ];
//     let shackCount = 0;

//     while(!checkIsAllHot()) {
//         findNotHotFood();
//         makeHotFood();
//         if(newFoodScoville.length === 1 && newFoodScoville[0] < 7) {
//             shackCount = -1;
//             break;
//         }
//     }

//     return shackCount;

//     function findNotHotFood() {
//         newFoodScoville.sort((a, b) => a-b);
//     }
    
//     function makeHotFood() {
//         const firstNotHotFood = newFoodScoville.shift();
//         const secNotHotFood = newFoodScoville.shift();
//         newFoodScoville.unshift(firstNotHotFood + secNotHotFood*2);
//         shackCount += 1;
//     }
    
//     function checkIsAllHot() {
//         findNotHotFood();
//         return (newFoodScoville[0] < K) ? false : true;
//     }
// }

// console.log(solution([1,2], 7));

