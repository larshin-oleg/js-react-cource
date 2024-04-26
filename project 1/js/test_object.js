"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('Test');
    }
};

console.log(options["colors"]["border"]); //вызов свойства вложенного объекта

//Деструктуризация:
const {border, bg} = options.colors;
console.log(border);

// delete  options.name; // удаление свойства name

// console.log(options);

let counter = 0;
for (let key in options){ // Перебор свойств объекта
    if (typeof(options[key]) === 'object'){
        for (let i in options[key]){
            console.log(`option: ${i}, value: ${options[key][i]}`); 
            counter++;
        }

    } else {
        console.log(`option: ${key}, value: ${options[key]}`); 
        counter++;
    }
    
}

console.log(counter);

console.log(Object.keys(options).length);

options.makeTest();


