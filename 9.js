// 9) Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. 

function arraySeven(arr) {

  let newArr = []

  for (let i = 0; i < arr.length; i++) {

    newArr.push(arr[i] + 7);
  }
  return newArr;


}

var resultado = arraySeven([1, 2, 3, 4, 5,6]);
console.log(resultado);


