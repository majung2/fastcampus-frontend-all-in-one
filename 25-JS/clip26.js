// 멤버변수

class A{
    constructor(name, age){
        this.name = name;
        this.age = age;

    }
}

console.log(new A('Mark', 37));

// class field는 런타임 확인

class B { 
    name; // this.name 에 해당, 값 할당 전엔 undefined
    age; // this.age
}

console.log(new B());

class C {
    name = 'no name';
    age = 0;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

console.log(new C('mijeong', 25));




// 멤버 함수

class D {
    hello1(){
        console.log('hello1', this);
    }

    hello2 = () => {
        console.log('hello2', this);
    }

}

new D().hello1();
new D().hello2();

class E {
    name = 'Mark';
    hello(){
        console.log('hello', this.name);
    }
}

new E().hello();