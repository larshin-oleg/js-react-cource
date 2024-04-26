"use strict";


//To String
//1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2)
console.log(typeof(null + ''));

const num = 5;
console.log("https://vk.com/ctalog/" + num);

const fontSize = 26 + 'px';

//To Number
//1)
console.log(typeof(Number('4')));

//2)
console.log(typeof(+'5'));

//3)
console.log(typeof(parseInt("15px", 10)));

let answer = +prompt("Введите число", "");


// To Boolean

// 0, '', null, undefined, NaN;
//1)
let switcher = null;
if (switcher){
    console.log('Working...');
}

switcher = 1;
if (switcher){
    console.log('Working...');
}

//2)
console.log(typeof(Boolean('5')));

//3)
console.log(typeof(!!"444"));