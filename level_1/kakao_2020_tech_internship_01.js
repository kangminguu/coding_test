/**
 * 2020 카카오 인턴쉽
 * 키패드 누르기
 */

function solution(numbers, hand) {
    var answer = '';

    this.numbers = numbers;
    this.hand = hand;

    const keyPad = {
        1: [0, 0],
        2: [0, 1],
        3: [0, 2],

        4: [1, 0],
        5: [1, 1],
        6: [1, 2],

        7: [2, 0],
        8: [2, 1],
        9: [2, 2],

        "*": [3, 0],
        0: [3, 1],
        "#": [3, 2],
    }

    let hand_position = [];
    let l_position = keyPad["*"]; // *의 위치
    let r_position = keyPad["#"]; // #의 위치

    numbers.map((element) => {
        if([1, 4, 7].includes(element)) {
            hand_position.push('L');

            l_position = keyPad[element];

        } else if([3, 6, 9].includes(element)) {
            hand_position.push('R');

            r_position = keyPad[element];
            
        } else {
            if(
                Math.abs(l_position[0] - keyPad[element][0]) + Math.abs(l_position[1]-keyPad[element][1]) 
                < Math.abs(r_position[0]-keyPad[element][0]) + Math.abs(r_position[1]-keyPad[element][1])
            )
            {
                hand_position.push('L');
                l_position = keyPad[element];
            } else if(
                Math.abs(l_position[0]-keyPad[element][0]) + Math.abs(l_position[1]-keyPad[element][1]) 
                > Math.abs(r_position[0]-keyPad[element][0]) + Math.abs(r_position[1]-keyPad[element][1])
            )
            {
                hand_position.push('R');
                r_position = keyPad[element];
            } else {
                if(hand === "left") {
                    hand_position.push('L');
                    l_position = keyPad[element];
                } else if(hand === "right") {
                    hand_position.push('R');
                    r_position = keyPad[element];
                }
            }
        }
    });

    hand_position.map((n) => {
        answer += n;
    });

    return answer;
}

let result01 = solution(
    [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],
    "right"
);

let result02 = solution(
    [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2],
    "left"
)

let result03 = solution(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    "right"
)

console.log(result01);
console.log(result02);
console.log(result03);