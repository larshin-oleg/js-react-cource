"use strict";

//1) ответ: 5
let x = 5;
console.log(x++);

//2) ответ: NaN
console.log([] + false - null + true);

//3) ответ: 2
let y = 1;
let x1 = y = 2;
console.log(x1);
console.log(y);

//4) ответ: 12
console.log([] + 1 + 2);

//5) ответ: 1
console.log("1"[0]);

//6) ответ: null
console.log(2 && 1 && null && 0 && undefined);

//7) ответ: Не равны
let a = 1,
    b = 2;

console.log(!!( a && b ) === ( a && b ));


//8) ответ: 3
console.log(null || 2 && 3 || 4 );

//9) ответ: false
let a1 = [1, 2, 3]; 
let b1 = [1, 2, 3];
console.log( a1 == b1);

//10) ответ: Infinity
console.log(+"Infinity");

//11) ответ: false
console.log("Ёжик" > "яблоко");

//12) ответ: 2
console.log(0 || "" || 2 || undefined || true || falsе);