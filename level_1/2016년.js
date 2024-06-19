const a = 9;
const b = 1;

const cals = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

let day = 0;
for (let i = 0; i < (a - 1); i++) day += cals[i];

console.log(day + b);
console.log(days[((day + b - 1) % 7)]);