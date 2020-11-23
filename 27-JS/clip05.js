function isAnimal(text) {
  const animals = ["고양이", "개", "거북이", "너구리"];
  return animals.includes(text);
}
//
const isAnimal = (text) => ["고양이", "개", "거북이", "너구리"].includes(text);
s;

//
function getSound(animal) {
  const sounds = {
    개: "멍멍",
    고양이: "야옹",
    참새: "짹짹",
    비둘기: "구구 구 구",
  };
  return sounds[animal] || "...?";
}
///
function makeSound(animal) {
  const tasks = {
    개: () => {
      console.log("멍멍!");
    },
    고양이() {
      console.log("야옹");
    },
    비둘기: function () {
      // 이렇게도 작성가능하지만 위 방법들 선호!
      console.log("구구 구 구");
    },
  };
  const task = tasks[animal];
  if (!task) {
    console.log("...?");
    return;
  }
  task();
}

makeSound("개");
makeSound("비둘기");
makeSound("인간");
