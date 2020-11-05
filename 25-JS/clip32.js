// Promise.resolve(/* value */);

// Promise.resolve(new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('foo');
//     },1000);
// })).then((data)=>{
//     console.log('프로미스 객체인 경우, resolve 된 결과를 받아서 then이 실행됩니다.', data);
// });

// Promise.resolve('bar').then(data => {
//     console.log('then 메소드가 없는 경우, fulfilled 됩니다.', data);
// })

// Promise.reject(/* value */);

// Promise.reject(new Error('reason'))
//     .then(error => {})
//     .catch(error => {
//     console.log(error);
//     });

function p(ms){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(ms);
        },ms);
    })
}

Promise.race([p(2000), p(1000), p(3000)]).then(message => {
    console.log('가장 먼저 fulfilled 된 이후 실행됩니다.', message);
});15