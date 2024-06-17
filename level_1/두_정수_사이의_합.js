const a = 3;
const b = 5;

const sumNums = (n1, n2) => {
    let sum = 0;
    for (let i = n2; i < n1 + 1; i++) {
        console.log(i);
        sum += i;
    }
    return sum;
}

if (a > b) {
    console.log(sumNums(a, b));
} else if (a < b) {
    console.log(sumNums(b, a));
} else {
    return a;
}