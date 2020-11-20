class Animal {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    // 자동으로 prototype 이 생성
    console.log(this.sound);
  }
}
class Dog extends Animal {
  constructor(name, sound) {
    super("개", name, sound);
  }
}
class Cat extends Animal {
  constructor(name, sound) {
    super("고양이", name, sound);
  }
}
const dog = new Dog("멍멍이", "멍멍");
const cat = new Cat("야옹이", "야옹");
const cat2 = new Cat("야오오오옹이", "야오오오오옹이");
dog.say(); // Dog.prototype = Animal.prototye; 않아도 사용가능!
cat.say();
cat2.say();
