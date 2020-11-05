// get, set

class A {
    _name = 'no name';

    get name() {
        return this._name + '@@@';
    }

    set name(value){
        this._name = value + '!!!'; 
    }
}

const a = new A();

console.log(a);
a.name = 'Mark'; // set 함수가 호출됨! 인자로 'Mark'가 들어감
console.log(a);
console.log(a.name);
console.log(a._name);

// readonly
class B{
    _name = 'no name';
    get name(){
        return this._name + '@@@';
    }
}

const b = new B();
console.log(b);
b.name = 'Mark';
console.log(b)

// static

class C {
    static age = 25; // static 변수
    static hello() { // static 함수
        console.log(C.age); // static 변수에 접근시 클래스 명으로 접근
    }
}

console.log(C, C.age);
C.hello();

class D {
    age = 20; 
    static hello(){
        console.log(this.age); // 말이 안되는 문법
    }
}

console.log(D, D.age);
D.hello();

// new D().hello();

class E {
    static name = '이 클래스의 이름을 E가 아니다.'
}

console.log(E);
