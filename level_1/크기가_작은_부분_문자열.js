const t = "500220839878";
const p = "7";

const lenT = t.length;
const lenP = p.length;
let count = 0;

for (let i = 0; i < lenT - lenP + 1; i++) {
    let num = "";
    for (let s = 0; s < lenP; s++) num += t[i+s];
    if (+num <= +p) count++;
}

console.log(count);