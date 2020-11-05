function hello1(){
    console.log('hello1');
}

console.log(hello1, typeof hello1);


function hello2(name){
    console.log('hello2', name);
}

function hello3(name) {
    return `hello3 ${name}`;
}

console.log(hello3('Mijeong'));

///


const hello4 = function(){
    console.log('hello4');
}
console.log(hello4, typeof hello4);

const hello5 = function(name){
    console.log('hello5');
}

const hello6 = function(name){
    return `hello6 ${name}`;
}

///
hello7();
function hello7(){
    console.log('hello7');
}

console.log(hello8);
// hello8();

var hello8 = function(){
    console.log('hello8');
}

hello9();

const hello9 = function(){
    console.log('hello9');
}

