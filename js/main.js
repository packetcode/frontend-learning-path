console.log("Sample Text inside Main.js file");

// Single lnie comment

/* 
multiline 
comment
*/

// var, let, const
let x;
const y = 10;

console.log(y);

// variables
x = 'hi'
x = 10
x = 12.5
// x = null
// x = undefined

// get the datatype
console.log(typeof x);

// string manipulation
const name = 'kamal';
// normal - not preferred
console.log('Hi, this is ' + name);
// template literals
console.log(`Hi, this is ${name}`)

//conditional statements
const a = '10' 
const b = 10 

// if - else if - else
if(a > b){
    console.log('a is greater than b');
}
else if(a == b){
    console.log('a is equal to b');
}
else{
    console.log('a is not greater than b');
}

// ternary
const r = a > b ? 'a is greater than b' : 'a is not greater than b'
console.log(r);

// arrays
// const testArray = new Array(1, 2, 3, 4);
const testArray = ['a', 'b', 'c', 1, 2.1, null]
console.log(testArray[1]);

testArray[1] = 'e';

testArray.push('10');
testArray.pop();
console.log(testArray);

// loops
// for
for(let i=0; i< 10; i++){
    console.log(i);
}
for(let i=0; i< testArray.length; i++){
    console.log(`For loop: ${testArray[i]}`);
}
// while
let z = 1;
while(z < 10){
    console.log(`While loop: ${z}`);
    // z = z + 1;
    // z += 1;
    z++
}

// functions
function test(name="test"){
    console.log(`Hi, this is ${name}`);
}

test('kamal');

// arrow functions
const test2 = (name="kamal") => {
    console.log(`Hi, this is ${name}`);
}

test2('kamal');

// Object
// Array inside Object
const testObject = {
    "name": 'kamal',
    "age": 21,
    "likesCoding": true,
    "skills": ['html', 'css', 'bootstrap', 'js']
}

console.log(testObject.name);
console.log(testObject.skills[1]);

// Object inside Array
const testObject2 = [
    {
        "id": 1,
        "name": "kamal",
        "age": 21
    },
    {
        "id": 2,
        "name": "teja",
        "age": 21,
        "skills": ['html', 'css']
    },
]

console.log(testObject2[1].skills[0]);
