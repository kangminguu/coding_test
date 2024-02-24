// /**
//  * js는 lexical scope를 사용하기때문에 함수의 상위 스코프가 정의 시점에 평가
//  * 
//  * this 키워드는 바인딩이 객체가 생성되는 시점에 결정됨
//  * 
//  * apply call bind
//  */

// const testFunction = function() {
//     return this;
// }

// console.log(testFunction());
// console.log(testFunction() === global);

/**
 * execution context 
 */

// /**
//  * closure
//  * 상위 함수보다 하위 함수가 더 오래 살아있는 경우를 클로저라한다. 
//  */

// function getNumber() {
//     let num = 5;

//     function innerNumber() {
//         return num;
//     }

//     return innerNumber;
// }

// const runner = getNumber();

// console.log(runner());

/**
 * async programming
 */

// function secWork() {
//     const now = new Date();

//     const milliseconds = now.getTime();
//     const afterTwoSeconds = milliseconds + 2 * 1000;

//     while(new Date().getTime() < afterTwoSeconds) {

//     }

//     console.log('완료');
// }

// console.log('시작');
// secWork();
// console.log('완료2');

/**
 * callback
 * promise
 */

// function waitAndRun() {
//     let timeOut = 2000;
    
//     setTimeout(() => {
//         console.log('waitAndRun 실행');
//     }, timeOut);
// }

// function waitAndRun2() {
//     let timeOut = 2000;
    
//     setTimeout(() => {
//         console.log('waitAndRun2-1 실행');

//         setTimeout(() => {
//             console.log('waitAndRun2-2 실행');

//             setTimeout(() => {
//                 console.log('waitAndRun2-3 실행');            
//             }, timeOut);
//         }, timeOut);
//     }, timeOut);
// }

// waitAndRun2();

// const timeOutPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('완');
//     }, 2000);
// });

// timeOutPromise.then((res) => {
//     console.log(res);
// });

// const getPromise = (seconds) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(`${seconds}초`);
//         // reject(`에러`);
//     }, seconds * 1000);
// });

// getPromise(1).then((res) => {
//     console.log(`a`);
//     return getPromise(1);
// }).then((res) => {
//     console.log(`b`);
//     return getPromise(1);
// }).then((res) => {
//     console.log(`c`);
// });

// getPromise(3).then((res) => {
//     console.log(`d`);
// }).catch((res) => {
//     console.log(res);
// }).finally(() => {
//     console.log('all end');
// });

// Promise.all([
//     getPromise(3),
//     getPromise(1),
//     getPromise(2),
// ]).then((res) => {
//     console.log(res);
// });

/**
 * async await
 */

const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`${seconds} 완`);
    }, seconds * 1000);
});

async function runner() {
    const result = await getPromise(3);
    console.log(result);
}

runner();