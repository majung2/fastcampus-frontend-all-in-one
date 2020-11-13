const superHeros = ["ironman", "captainAmerica", "doctorStrange"];

// ver 1
for (let i = 0; i < superHeros.length; i++) {
  console.log(superHeros[i]);
}

// ver2
function print(hero) {
  console.log(hero);
}

superHeros.forEach(print);

// ver 3
superHeros.forEach(function (hero) {
  console.log(hero);
});

// ver 4
superHeros.forEach((hero) => {
  console.log(hero);
});
