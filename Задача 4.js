let a;
let b;

function nums ( a, b ) {
a = +prompt ('Введите число от 1 до 5', '');
b = +prompt ('Введите число от 10 до 15', '');

  let timerId = setInterval (function count (){
  if ( a <= b ) {
  console.log (a);
   a++;} 
}, 1000);
  } 
 
nums()
 