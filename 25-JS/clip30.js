// const p = new Promise((resolve, reject) => {
//     //pending

//     // ms 이후에 실행되는 함수
//     setTimeout(() => { 
//         resolve(); // fulfilled
//     }, 1000);
// });

// p.then(() => { //fulfilled 이후 실행 = callback 작성
//     console.log('1000ms후에 fulfilled 됩니다.')
// })


/////


function p() {
    return new Promise((resolve, reject) => {
        //pending
        setTimeout(() => { 
            reject(new Error('bad')); 
        }, 1000);
    });

}

p().then((message) => {
    console.log('1000ms 후에 fulfilled!', message);
}).catch(error => {
    //callback 함수
    console.log('1000ms 후에 rejected', error);
});