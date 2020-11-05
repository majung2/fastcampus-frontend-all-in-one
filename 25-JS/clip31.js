// function p(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             reject(new Error('bad'));
//         }, 1000);
//     });
// }

// p()
// .then(message => {
//     console.log('1000ms 후에 fulfill', message);
// })
// .catch(error =>{
//     console.log('1000ms 후에 reject', error);
// })
// .finally(()=>{
//     console.log('end');
// });

// function c(callback){
//     setTimeout(()=>{
//         callback();
//     }, 1000);
// }

// c(()=> {
//     console.log('1000ms 후에 callback 함수가 실행됩니다.');
// });

// c(()=> {
//     c(()=> {
//         c(()=> {
//             console.log('3000ms 후에 callback 함수가 실행됩니다.');
//         });
//     });    
// });

function p(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve();
        }, 1000);
    });
}

p()
    .then(()=>{ // 1초뒤에 실행
        return p();
    })
    .then(() => p()) // 2초뒤에 실행
    .then(p) // 3초뒤에 실행
    .then(()=>{ // 4초뒤에 실행
        console.log('4000ms 후에 fulfilled');
    });