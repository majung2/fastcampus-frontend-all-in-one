// new Function()

// const sum = new Function('a', 'b', 'c', 'return a+b+c'); // 매개변수와 바디를 문자열로 넣음

// console.log(sum(1,2,3));

///

// global.a = 0; // 전역변수

// {
//     const a = 1;
//     const test = new Function('return a');
//     console.log(test());
// }

// {
//     const a = 2;
//     const test = function(){
//         return a;
//     }
//     console.log(test());
// }

const hello1 = () => {
    console.log('hello1');
}

const hello2 = name => {
    console.log('hello2', name);
}

const hello3 = (name, age) => {
    console.log('hello3', name, age);
}

const hello4 = name => {
    return `hello4 ${name}`;
}

const hello5 = name => `hello5 ${name}`;

// hello1();
// hello2('mijeong');
// hello3('mijeong', 25);
console.log(hello4('mijeong'));
console.log(hello5('mijeong'));
