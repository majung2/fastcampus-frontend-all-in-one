const dog = {
  name: "멍멍이",
};
function getName(animal) {
  return animal && animal.name;
}
const name = getName();
console.log(name);

////

console.log(true && "hello");
console.log(false && "hello");
console.log("hello" && "bye");
console.log(null && "hello");
console.log(undefined && "hello");
console.log("" && "hello");
console.log(0 && "hello");
console.log(1 && "hello");
console.log(1 && 1);

///
const object = null;
const name = object && object.name;
console.log(name);

///
function getName(animal) {
  const name = animal && animal.name;
  return name || "이름이 없는 동물입니다.";
}

///
console.log(false || "hello");
console.log("" || "이름없다.");
console.log(null || "널이다");
console.log(undefined || "define 되지 않았다.");
console.log(0 || "제로다");

console.log(1 || "음?");
console.log([] || "여긴 안본다");
