// 12) Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 

function hambriento(arr) {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] =="comida") {
      console.log("yummy")
    } else {
      console.log("tengo hambre")
    }

  }

}

var resultado = hambriento([1, 2, "comida", 4, 5, "comida"]);
console.log(resultado);