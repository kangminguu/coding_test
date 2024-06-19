const s = "banana";

const s_obj = {};
[...s].forEach(n => s_obj[n] = s.indexOf(n));

console.log(s_obj);

const a = [...s].map((n, index) => {
    if (s_obj[n] === index) return -1;
    else {
        let value = index - s_obj[n];
        s_obj[n] = index;
        return value;
    }
});

console.log(a);