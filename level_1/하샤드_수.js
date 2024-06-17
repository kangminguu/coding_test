const x = 18;

return (!x % (x.toString().split("").reduce((pre, cur) => parseInt(pre) + parseInt(cur), 0)));