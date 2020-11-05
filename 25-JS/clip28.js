// 상속 기본

// class Parent {
//     name = 'Lee';

//     hello(){
//         console.log('hello', this.name);
//     }
// }

// class Child extends Parent {}

// const p = new Parent();
// const c = new Child();

// console.log(p, c);

// c.hello();
// c.name = 'Anna';
// c.hello();

////////

// class Parent {
//     name = 'Lee';

//     hello() {
//         console.log('hello', this.name);
//     }
// }

// class Child extends Parent{
//     age = 25;

//     hello(){
//         console.log('hello', this.name, this.age);
//     }
// }

// const p = new Parent();
// const c = new Child();

// console.log(p, c);
// c.hello();
// c.name = 'Anna';
// c.hello();

/////

// class Parent{
//     name;

//     constructor(name){
//         this.name = name;
//     }
//     hello(){
//         console.log('hello', this.name);
//     }
// }

// class Child extends Parent{
//     age;

//     constructor(name, age){
//         super(name); // Parent 클래스의 constructor 와 동일!
//         this.age = age;
//     }
//     hello(){
//         console.log('hello', this.name, this.age);
//     }
// }

// const p = new Parent('Mark');
// const c = new Child('Mark', 25);

// console.log(p, c);

// c.hello();

///// static 상속

class Parent{
    static age = 25;
}

class Child extends Parent{}

console.log(Parent.age, Child.age);

