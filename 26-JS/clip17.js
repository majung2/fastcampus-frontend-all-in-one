const array = [1, 2, 3, 4, 5];
console.log(array);

const doggy = {
  name: "멍멍이",
  sound: "멍멍",
  age: 2,
};

console.log(Object.keys(doggy));
console.log(Object.values(doggy));
console.log(Object.entries(doggy));

for (let key in doggy) {
  console.log(`${key}: ${doggy[key]}`);
}
