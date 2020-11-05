// while(true){
//     console.log('안녕하세요');
//     if(Math.random() * 100 > 90){
//         break;
//     }
// }

// do{
//     console.log('안녕하세요');
// } while (Math.random() * 100 < 90)


for (const i of [1,2,3]){
    console.log(i);
}


Object.prototype.test = function(){};

for (const i in {a:1, b:2, c:3}){
    console.log(i);
}