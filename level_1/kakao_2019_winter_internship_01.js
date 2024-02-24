/**
 * 크레인 인형뽑기 게임
 */

function solution(board, moves) {
    var answer = 0;

    let basket = [];

    moves.map((n) => {
        for(let i = 0; i < board.length ; i++) {
            if(board[i][n-1] != 0) {
                basket.push(board[i][n-1]);
                board[i][n-1] = 0;
                break;
            }
        }
    });

    basket.push('end');

    let popedDolls = [];

    function popDolls() {
        for(let i = 0; i < basket.length-1; i++) {
            if(basket[i] === basket[i+1]) {
                popedDolls.push(basket[i]);
                basket = [ ...basket.slice(0, i), ...basket.slice(i+2) ];
                console.log(basket);
                console.log("=======");
                popDolls();
            }
        }
        
        return popedDolls.length;
    }

    answer = popDolls() * 2;

    return answer;
}

let result01 = solution(
    [
        [0,0,0,0,0],
        [0,0,1,0,3],
        [0,2,5,0,1],
        [4,2,4,4,2],
        [3,5,1,3,1]
    ], 
    [1,5,3,5,1,2,1,4]
);
// result = 4

console.log(result01);