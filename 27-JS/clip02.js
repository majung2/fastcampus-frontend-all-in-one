function print(person) {
  if (!person) {
    return;
  }
  console.log(person.name);
}

const person = null;

print();

///

console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!"");
console.log(!NaN); // 1 / 'text';

///
console.log(!3);
console.log(!"hello");
console.log(!["array"]);
console.log(![]);

///
const value = {};

const truthy = !!value;
console.log(truthy);
