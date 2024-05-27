const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
    [2, 5, 3], 
    [4, 4, 1], 
    [1, 7, 3]
];

const answer = [];

commands.forEach(arr => {
    sliceAarray(arr);
});


function sliceAarray(arr) {
    const i = arr[0];
    const j = arr[1];
    const k = arr[2];

    answer.push(array.slice(i-1, j).sort((a, b) => a-b)[k-1]);
}

console.log(answer);