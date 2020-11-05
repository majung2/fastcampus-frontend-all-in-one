// function Person(name, age){
//     console.log(this); // this: 객체가 만들어졌을 때 객체를 가리킴
//     this.name = name;
//     this.age = age;
// }

// const p = new Person('Mijeong', 25);

// console.log(p, p.name, p.age);

////// 아래는 불가능한 코드

// const a = new Person('Anna', 100);

// console.log(a, a.name, a.age);

// const Cat = (name, age) => {
//     console.log(this);
//     this.name = name;
//     this.age = age;
// } 

// const c = new Cat('mimi', 10);


// function plus(base){
//     return function(num){
//         return base + num;
//     }
// }

// const plus5 = plus(5);
// console.log(plus5(10));

// const plus7 = plus(7);
// console.log(plus7(8));

///////////////
// 함수를 인자로 하여 함수를 호출


function hello(c){
    console.log('hello');
    c();
}

hello(function() {
    console.log('콜백');
});


