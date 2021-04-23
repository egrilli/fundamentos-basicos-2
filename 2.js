//Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. 

function exarr(arr) {

  let menor = arr[0];
  let mayor = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (menor > arr[i]) {
      menor = arr[i];
    }

    if (mayor < arr[i]) {
      mayor = arr[i];
    }
  }
  console.log(menor);
  return mayor;



}

var resultado =exarr([2, 3, 4, 1, -3, 7, -231231,2312]);
console.log(resultado);




function printLowReturnHigh(arr){
  var low = arr[0];
  var high = arr[0];
  for (var i = 1; i < arr.length; i++){
      if (arr[i] < low){
          low = arr[i];
      }else if (arr[i] > high){
          high = arr[i];
      }
  }
  console.log(low);
  return high;
}

console.log(printLowReturnHigh([50,-1,20,12]));
