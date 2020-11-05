// let n = 5;

// console.log(n % 5 === 0 ? '5의 배수입니다.' : '5의 배수가 아닙니다.');

// const message = n % 5 === 0 ? '5의 배수입니다.' : '5의 배수가 아닙니다.';
// console.log(message);

////////////// switch

let m = 1;

// switch (m){
//     default: // 어떤 경우에도 해당하지 않을 때, {}로도 사용가능
//         console.log(m);
// }

switch (m % 5){
    case 0:{
        console.log('5의 배수입니다.');
        break;
    }
    case 1:
    case 2:
    case 3:
    case 4:
        console.log('5의 배수가 아닙니다.');

    default:
        console.log(m);
}