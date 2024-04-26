"use strict";

const arr = [1, 12, 3, 26, 8];
// arr.sort(); //сортирует как строки: [ 1, 12, 26, 3, 8 ]
// console.log(arr);

//Сортировка массива как числа:
// function compareNum(a, b) { //Callback функция, которую передадим в sort()
//     return a - b;
// }
// arr.sort(compareNum); //  вывод: [ 1, 3, 8, 12, 26 ]
// console.log(arr);

//Покажем, что length показывает последний индекс элемента + 1
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.pop(); // удаление последнего элемента из массива
// arr.push(10); //добавление 10 в конец массива

// console.log(arr);

//перебор массива:
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

//Перебор массива способ 2: работает только с массивами, строками и псевдомассивами
// for (let value of arr){
//     console.log(value);
// }

//Перебор массива через forEach(), аргументы callback-функции: item - где элемент_массива, i - индекс_элемента, arr - массив
// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

//Трансформация строки в массив:
// const str = "Йогурт, Молоко, Яйца, Хлеб, Паприка";
// const products = str.split(", ");
// console.log(products);

//Трансформация массива в строку:
// const products_arr = ['Йогурт', 'Молоко', 'Яйца', 'Хлеб', 'Паприка'];
// products_arr.sort(); // сортировка массива (по алфавиту)
// const products_str = products_arr.join("; ");
// console.log(products_str);