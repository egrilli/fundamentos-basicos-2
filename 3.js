// 3) Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.

function arrPrint() {

  let arr = [2, 1, 3, 52, -23, -2, 533, 68, 52];
  let firstOdd = 0;

  console.log(arr[arr.length - 2])

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      firstOdd = arr[i]
      break;
    }
  }
  return firstOdd;
}

var resultado =arrPrint([2, 1, 3, 52, -23, -2, 533, 68, 52])

console.log(resultado);



function print2ndToLastReturnOdd(arr){
  console.log(arr[arr.length-2]);
  for (var i = 0; i < arr.length; i++){
      if (arr[i] % 2 == 1){
          return arr[i];
      }
  }
}
console.log(print2ndToLastReturnOdd([0,2,1,4,3]));