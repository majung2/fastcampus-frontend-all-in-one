// new Object

// const a = new Object();

// console.log(a, typeof a);


// const b = new Object(true);
// console.log(b, typeof b);


// const c = new Object({name: 'mijeong'});
// console.log(c, typeof c);


// 프로토타입

function Person(name, age){
    this.name = name;
    this.age = age;
    // this.hello = function(){
    //     console.log('hello', this.name, this.age);
    // }
}

Person.prototype.hello = function(){
    console.log('hello', this.name, this.age);
}

const p = new Person('mijeong', 25);
p.hello();
console.log(p.toString());

console.log(Person.prototype);
console.log(Person.prototype.toString);
console.log(Person.prototype.constructor);
console.log(Person.hello);
console.log(Person.prototype.hello);

console.log(Object.prototype);
console.log(Object.prototype.toString);
console.log(Object.prototype.constructor);

console.log(p instanceof Person); // p가 Person이라는 생성자 함수로부터 나온 인스턴스인지 여부 반환
console.log(p instanceof Object);