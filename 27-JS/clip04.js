function calculateCircleArea(r) {
  return Math.PI * r * r;
}

const area = calculateCircleArea(4);
console.log(area);

///

const calculateCircleArea = (r = 1) => Math.PI * r * r;

const area = calculateCircleArea();
console.log(area);
