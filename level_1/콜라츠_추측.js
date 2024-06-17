let num = 626331;
let count = 0;

while (num != 1) {
    num = (num % 2) ? num * 3 + 1 : num / 2;
    if (count > 500) {
        count = -1;
        break;
    } else {
        count += 1;
    }
}

console.log(count);