//Promise 객체를 리턴하는 함수

function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
      // reject(new Error('reason'));
    }, ms);
  });
}

// Promise 객체를 이용해서 비동기 로직을 수행할 때

// p(1000).then(ms => {
//     console.log(`${ms} ms 후에 실행된다.`);
// })

// Promise 객체를 리턴하는 함수를 await로 호출하는 방법

// (async function main(){
//     const ms = await p(1000);
//     console.log(`${ms} ms 후에 실행된다.`);
// })();

// Promise 객체가 rejected 된 경우의 처리를 위해 try catch를 이용한다.

// async function에서 return 되는 값은 Promise.resolve 함수로 감싸서 리턴된다.

// async function asyncP(){
//     const ms = await p(1000); // 여기서 에러 처리를 할 수도 있음
//     return 'Mark' + ms;
// }

// (async function main(){
//     try{
//         const name = await asyncP();
//         console.log(name);
//     } catch(error){ // asyncP 에서 발생한 에러가 넘어옴
//         console.log(error);
//     } finally {
//         console.log('end');
//     }
// })();

////

// Promise
p(1000)
  .then(() => p(1000))
  .then(() => p(1000))
  .then(() => {
    console.log("3000ms 후에 실행");
  });

//async await
(async function main() {
  await p(1000);
  await p(1000);
  await p(1000);
  console.log("3000ms 후에 실행");
})();

// Promise.all & race
(async function main() {
  const results = await Promise.race([p(1000), p(2000), p(3000)]); // 배열로 result에 값이 넘어감
  console.log(results);
})();
1;
