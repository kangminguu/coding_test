const info = [
    "java backend junior pizza 150",
    "python frontend senior chicken 210",
    "python frontend senior chicken 150",
    "cpp backend senior pizza 260",
    "java backend junior chicken 80",
    "python backend senior chicken 50"
];

const query = [
    "java and backend and junior and pizza 100",
    "python and frontend and senior and chicken 200",
    "cpp and - and senior and pizza 250",
    "- and backend and senior and - 150",
    "- and - and - and chicken 100",
    "- and - and - and - 150"
];

const obj_info = {};
const len_info = info.length;
const len_query = query.length;
const answer = new Array(len_query).fill(0);

for (let i = 0; i < len_info; i++) {
    let split_info = info[i].split(" ");
    split_info[4] = parseInt(split_info[4]);

    const put_objInfo = (a, b, c, d) => (!obj_info[a + b + c + d]) ? obj_info[a + b + c + d] = [split_info[4]] : obj_info[a + b + c + d].push(split_info[4]);

    put_objInfo(split_info[0], split_info[1], split_info[2], split_info[3]);
    put_objInfo("-", split_info[1], split_info[2], split_info[3]);
    put_objInfo(split_info[0], "-", split_info[2], split_info[3]);
    put_objInfo(split_info[0], split_info[1], "-", split_info[3]);
    put_objInfo(split_info[0], split_info[1], split_info[2], "-");
    put_objInfo("-", "-", split_info[2], split_info[3]);
    put_objInfo("-", split_info[1], "-", split_info[3]);
    put_objInfo("-", split_info[1], split_info[2], "-");
    put_objInfo(split_info[0], "-", "-", split_info[3]);
    put_objInfo(split_info[0], "-", split_info[2], "-");
    put_objInfo(split_info[0], split_info[1], "-", "-");
    put_objInfo("-", "-", "-", split_info[3]);
    put_objInfo("-", "-", split_info[2], "-");
    put_objInfo("-", split_info[1], "-", "-");
    put_objInfo(split_info[0], "-", "-", "-");
    put_objInfo("-", "-", "-", "-");
}

for (let i = 0; i < len_query; i++) {
    const split_query = query[i].split(" ");
    const join_query = split_query[0] + split_query[2] + split_query[4] + split_query[6];
    const minScore = parseInt(split_query[7]);

    obj_info[join_query]

    console.log(obj_info[join_query]);
}

console.log(obj_info);
