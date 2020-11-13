const array = [1, 2, 3, 4, 5, 6, 7, 8];
// 제곱 원소 배열 만들기

// ver 1
const squared = [];

for (let i = 0; i < array.length; i++) {
  squared.push(array[i] * array[i]);
}

// ver 2
array.forEach((num) => {
  squared.push(num * num);
});

// ver 3
const square = (n) => n * n;
const squared = array.map(square);

// ver 4
const squared = array.map((n) => n * n);

////
const items = [
  {
    id: 1,
    text: "hello",
  },
  {
    id: 2,
    text: "bye",
  },
];

const texts = items.map((item) => item.text);
console.log(texts);

/// indexOf
const superheroes = ["아이먼맨", "캡틴아메리카", "토르", "닥터스트레인지"];
const index = superheroes.indexOf("닥터스트레인지");
console.log(index);

// findIndex 와 find
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
    text: "객체와 배열배우기",
    done: true,
  },
  {
    id: 4,
    text: "배열 내장함수 배우기",
    done: false,
  },
];

let index = todos.findIndex((todo) => todo.id === 2);
console.log(index);
index = todos.find((todo) => todo.done === false);
console.log(index);
