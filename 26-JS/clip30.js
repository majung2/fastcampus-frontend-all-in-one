// forEach
const superheroes = ["아이언맨", "캡틴 아메리카", "토르", "닥터 스트레인지"];
superheroes.forEach((hero) => {
  console.log(hero);
});

// map
const array = [1, 2, 3, 4, 5];
const squared = array.map((n) => n * n);
console.log(squared);

// indexOf
const fruits = ["apple", "banana", "watermelon", "grape"];
const index1 = fruits.indexOf("watermelon");
console.log(index1);

// findIndex
const todos = [
  {
    id: 1,
    text: "자바스크립트 입문",
    done: true,
  },
  {
    id: 2,
    text: "함수배우기",
    done: true,
  },
  {
    id: 3,
    text: "객체와 배열 배우기",
    done: true,
  },
  {
    id: 4,
    text: "배열 내장함수 배우기",
    done: false,
  },
];

const index2 = todos.findIndex((todo) => todo.id === 3);
console.log(index2);

// find
const index3 = todos.find((todo) => todo.id === 3);
console.log(index3);
// filter
const taskNotDone = todos.filter((todo) => todo.done === false);
console.log(taskNotDone);
// splice
const numbers = [1, 2, 3, 4];
numbers.splice(1, 2);
console.log(numbers);
// slice
const ages = [10, 20, 30, 40];
const sliced = ages.slice(0, 2);
console.log(ages);
console.log(sliced);
// shift, unshift
const arr1 = [1, 2, 3];
const value1 = arr1.shift();
arr1.unshift(4);
console.log(arr1);
console.log(value1);
// push, pop
const arr2 = [1, 2, 3];
const value2 = arr2.pop();
arr2.push(4);
console.log(arr2);
console.log(value2);
// concat
const arrA = [1, 2, 3];
const arrB = [4, 5, 6];
const concated = arrA.concat(arrB);
console.log(arrA);
console.log(arrB);
console.log(concated);
// join
const array2 = [1, 2, 3, 4, 5];
console.log(array2.join());
console.log(array2.join(" "));
console.log(array2.join(", "));
// reduce
const array3 = [1, 2, 3, 4, 5];
let sum = array3.reduce((acc, cur) => acc + cur, 0);
console.log(sum);
