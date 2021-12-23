let x;
let n; 

let nums = ( x, n ) => {
 x = +prompt ('Введите число', '');
 n = +prompt ('В какую степень возвести?', '');
 return x**n};

console.log(nums())