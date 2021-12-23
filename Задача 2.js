let a = + prompt ('Введите число не более 1000','');

if (a < 1000 && a!==1 && a!==0) {
     for (let j = 2; j < a; j++){
         if (a % j == 0) {
           console.log ('Простое число') ;
         } else if (a % j !== 0) {
         console.log ('Это не простое число');
     }
  }
  } else if (a===1 || a===0){
    console.log ('Это не простое число');
  } else if (a >= 1000) {
    console.log ('Данные не верны');
}
  