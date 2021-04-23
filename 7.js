// 7) Incrementa los Segundos - Dado un array de números arr, agrega 1 a cualquier otro elemento, específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, console.log cada valor del array y devuelve arr. 

function arrSeg(arr) {

  for (let i = 0; i <arr.length ; i++) {
    if (i % 2 != 0) {
      arr[i] +=1

    }
  }

  return arr;

}


var resultado = arrSeg([2, 1, 2, 1, 2, 1, 2, 1]);
console.log(resultado);
