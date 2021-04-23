// 4) Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 

function doubleArr(arr) {

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2)
  }
  
  return newArr;
}

var resultado =doubleArr([1,2, 3, 6, 7]);
console.log(resultado);

