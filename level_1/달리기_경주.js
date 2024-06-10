let players, callings;
players = ["mumu", "soe", "poe", "kai", "mine"];
callings = ["kai", "kai", "mine", "mine"];

const mapForFindNumber = new Map();
const mapForFindPlayer = new Map();
players.forEach((player, index) => {
    mapForFindNumber.set(player, index);
    mapForFindPlayer.set(index, player);
});

callings.forEach(name => {
    const number = mapForFindNumber.get(name);
    const overtakenPlayer = mapForFindPlayer.get(number-1);
    mapForFindPlayer.set(number, overtakenPlayer);
    mapForFindPlayer.set(number-1, name);
    mapForFindNumber.set(overtakenPlayer, number);
    mapForFindNumber.set(name, number-1);
});

// mapForFindPlayer.forEach(N => console.log(N));

console.log([ ...mapForFindPlayer.values() ]);

// function solution(players, callings) {
//     callings.forEach(name => {
//     const idx = players.indexOf(name);
//         players[idx] = players[idx-1];
//         players[idx-1] = name;
//     });
//     return players;
// }