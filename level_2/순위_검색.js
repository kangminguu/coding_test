const info = [
    "java backend junior pizza 150",
    "python frontend senior chicken 210",
    "python frontend senior chicken 150",
    "cpp backend senior pizza 260",
    "java backend junior chicken 80",
    "python backend senior chicken 50"
];

const obj = {
    java : {
        backend : {
            junior : {
                pizza : { 
                    150 : 1
                }
            },

            senior : {
                pizza : { 
                    20 : 1
                }
            }
        }
    }
}

console.log(obj.java.backend);

const query = [
    "java and backend and junior and pizza 100",
    "python and frontend and senior and chicken 200",
    "cpp and - and senior and pizza 250",
    "- and backend and senior and - 150",
    "- and - and - and chicken 100",
    "- and - and - and - 150"
];

// const obj_of_info = {};
// info.forEach(n => {
//     let one_info = n.split(" ");

//     obj_of_info[one_info] = 
// });