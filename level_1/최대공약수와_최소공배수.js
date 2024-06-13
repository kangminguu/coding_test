const n = 12;
const m = 7;

let maxGongYagSu = Math.min(n, m);
let minGongBaeSu = Math.max(n, m);

while (true) {
    if (n % maxGongYagSu === 0 && m % maxGongYagSu === 0) {
        break;
    } else {
        maxGongYagSu--;
    }
}

while (true) {
    if (minGongBaeSu % n === 0 && minGongBaeSu % m === 0) {
        break;
    } else {
        minGongBaeSu++;
    }
}

console.log(maxGongYagSu);
console.log(minGongBaeSu);