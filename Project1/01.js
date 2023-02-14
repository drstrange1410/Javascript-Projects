/*var a = 4.02;
var b;
b = 2.0;*/

/*
\' = single quote
\" = double quote
\\ backslash
\n new line
\r carriage return
\t tab
\b backspace
\f form feed

You can concatenate strings with + operator
push() add element to the end of the array
unshift() adds element to the start of the array
pop() removes element from the end of the array
shift() removes element from the start of the array

array can have multiple data types

'==' equality opertar -> can compare values with different data types
'===' strict equality operator -> first compares data types than values


*/

/*var myStr = 'First line\n\t\\Secondline\n Third line';
console.log(myStr);*/

/* var s1 = "My name is " ;
var s2 = "Harsh";
console.log(s1 + s2 + " Tiwari."); */

/*const multiply = (number) => number * 2;

console.log(multiply(2));*/

/* Objects */

/*var myDog = {
  "name" : "Tommy" ,
  "legs" : 4,
  "tails" : 1,
  "friends": ["everything !"]
};

var namevalue = myDog.name;
var friendsvalue = myDog.friends;
delete myDog['legs'];
console.log(namevalue + " " + friendsvalue + "\n");
console.log(myDog.legs);*/

let countEl = document.getElementById('count-el');
let welcomeEl = document.getElementById('welcome-el');
let saveEl = document.getElementById('save-el');
let count = 0;
function increment() {
  count += 1;
  countEl.innerText = count;
}
let name1 = 'Harsh';
let greeting = 'Welcome';

function save() {
  saveEl.innerText += '-' + count;
  countEl.innerText = 0;
  count = 0;
}
welcomeEl.innerText = greeting + ' ' + name1;
