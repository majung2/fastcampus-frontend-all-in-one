const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log("sum 함수가 실행됩니다.");
    return this.a + this.b;
  },
};

console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);

/////

const dog = {
  _name: "멍멍이",
  get name() {
    console.log("이름을 조회합니다.");
    return this._name;
  },
  set name(value) {
    // 무조건 파라미터 받아와야함
    console.log("이름이 바뀝니다." + value);
    this._name = value;
  },
};

console.log(dog.name);
dog.name = "뭉뭉이";
console.log(dog.name);

////

const numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log("calculate");
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    this._a = value;
    this.calculate();
  },
  set b(value) {
    this._b = value;
    this.calculate();
  },
};

console.log(numbers.sum);
numbers.a = 5;
numbers.b = 7;
numbers.a = 10;
console.log(numbers.sum);

////

const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log("sum");
    return this.a + this.b;
  },
};

console.log(numbers.sum);
numbers.a = 5;
numbers.b = 7;
numbers.a = 10;
console.log(numbers.sum);
console.log(numbers.sum);
console.log(numbers.sum);
console.log(numbers.sum);
