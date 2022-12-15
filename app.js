let firstName = "Blake";
const states = 50;
let additionTest = (5 + 4);
const drinkAge = 21;
// console.log(additionTest); should output the vaule 9:
// console.log(states); should always output the vaule 50:
// console.log(firstName); should output the vaule Blake, and can be changed:
let message = "Hello World";

function sayHello(y,x){
    return alert(message);
}
let hello = sayHello(null,null);
// this works becasue the let  enter the arguments which completes the fn computing.:


let id1 = {
    name:'Charles',
    age: 21,
};
let id2 = {
    name: 'Abby',
    age: 27,
};
let id3 = {
    name:'James',
    age:18,
};
let id4 = {
    name:'John',
    age: 17,
};
let ids = [id1,id2,id3,id4];

for(let a = 0; a < ids.length; a++) {
    if (checkAge(ids[a].age,drinkAge)) {
        alert('Sorry '+ ids[a].name + ', you are not old enough to access this page')
    } else { alert('Congrats  '+ ids[a].name + ', you can enter') }
}

function checkAge(x,y){
    return (x < y);
} 

let veg = ['carrots', 'celery', 'potatoes', 'lettuce', 'onions', 'squash']

for(let v = 0; v < veg.length; v++){
    console.log(veg[v]);
}