const afterSteal = () => {
    const gymSuit = {}
    for(let i = 1; i < n+1; i++) gymSuit[i] = 1;

    lost.forEach(n => gymSuit[n] -= 1);
    reserve.forEach(n => gymSuit[n] += 1);

    return gymSuit;
}

const fromFront = (gymSuit) => {
    Object.keys(gymSuit).forEach(n => {
        if (gymSuit[n] === 0 && gymSuit[parseInt(n)+1] === 2) {
            gymSuit[n] += 1;
            gymSuit[parseInt(n)+1] -= 1;
        }
    });

    return gymSuit;
}

const fromBehind = (gymSuit) => {
    Object.keys(gymSuit).reverse().forEach(n => {
        if (gymSuit[n] === 0 && gymSuit[parseInt(n)-1] === 2) {
            gymSuit[n] += 1;
            gymSuit[parseInt(n)-1] -= 1;
        }
    });
    
    return gymSuit;
}

const getBiggerCount = (gymSuit1, gymSuit2) => {
    let count1 = 0;
    let count2 = 0;
    Object.values(gymSuit1).forEach(n => (n != 0) ? count1++ : null);
    Object.values(gymSuit2).forEach(n => (n != 0) ? count2++ : null);

    return (count1 > count2) ? count1 : count2;
}

let n, lost, reserve;
// n = 5;
// lost = [2, 4];
// reserve = [1, 3, 5];

// n = 5;
// lost = [2, 4];
// reserve = [3];

n = 7;
lost = [2, 4, 6];
reserve = [1, 3, 7];

const gymSuit1 = fromBehind(fromFront(afterSteal()));
const gymSuit2 = fromFront(fromBehind(afterSteal()));

console.log(gymSuit1);
console.log(gymSuit2);
console.log(getBiggerCount(gymSuit1, gymSuit2));