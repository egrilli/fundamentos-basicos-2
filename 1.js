//Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].


function big(arr) {

  let x = "big";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] = x;

    }
  }
  return arr;
}

var resultado = big([2, 3, 0, 2, 3, -2, -3, -7, 8, -122]);
console.log(resultado);



