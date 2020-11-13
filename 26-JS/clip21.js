for (let i = 0; i < 10; i++) {
  if (i === 2) continue;
  console.log(i);
  if (i === 5) break;
}

function biggerThanThree(numbers) {
  /* 구현해보세요 */
  let newArray = [];
  for (let number of numbers) {
    if (number <= 3) continue;
    else newArray.push(number);
  }
  return newArray;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers));
