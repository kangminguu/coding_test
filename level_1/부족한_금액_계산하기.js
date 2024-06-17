let price, money, count;
price = 3;
money = 20;
count = 4;

let 총이용료 = 0;
for (let i = 1; i <= count; i++) 총이용료 += price * i;

console.log((총이용료 > money) ? 총이용료 - money : 0);