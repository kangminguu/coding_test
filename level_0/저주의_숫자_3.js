const n = 40;

let startNum = 0;

for(let i = 0; i < n; i++) {
    startNum++;
    while(startNum%3 === 0 || startNum.toString().includes("3")) {
        startNum++;
    }
}
