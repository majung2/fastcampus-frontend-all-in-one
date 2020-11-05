/*
ES6 부터 JS 표준 내장 객체로 추가
*/

// new Promise(/* executor */(resolve, reject) => {});


// new Promise((resolve, reject)=>{
//     reject(); // rejected 상태

// }); 



const p = new Promise((resolve, reject) => {
    //pending

    // ms 이후에 실행되는 함수
    setTimeout(() => { 
        resolve(); // fulfilled
    }, 1000);
});

p.then(() => { //fulfilled 이후 실행 = callback 작성

})
