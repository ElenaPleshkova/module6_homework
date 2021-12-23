let a=+prompt ("Введите число", "");


function getSum (a,instraction){
  return instraction (a);
}
function sum(a){
  return a+a;
}

let result= getSum (a,sum);
console.log(result);