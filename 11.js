//11 ) Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].

function trNegative(arr) {

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr[i] = -Math.abs(arr[i]);
  }

  return newArr;
}

var resultado = trNegative([2, 3, 4, 5, -6, -7, -8]);
console.log(resultado);




function negativeMaker(arr){
  var newArr = [];
  for (var i = 0; i < arr.length; i++){
      if (arr[i] > 0){
          arr[i] = arr[i]*-1;
      }
      newArr.push(arr[i]);
  }
  return newArr;
}

console.log(negativeMaker([2, 3, 4, 5, -6, -7, -8]));