//6) Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.

function pareimpar(arr) {

  

  let cont1 = 0;
  let cont2 = 0;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 == 0) {
      cont1 += 1
      if (cont1 == 3) {
        console.log("Que parcial!")
        cont1 = 0;
      }
    } else {
      cont2 += 1
      if (cont2 == 3) {
        console.log("Que imparcial!")
        cont2 = 0;
      }
    }
  }

}

var resultado=pareimpar([1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2,2,2,2]);




function evensOdds(arr){
  var odds = 0;
  var evens = 0;
  for (var i = 0; i < arr.length; i++){
      if (arr[i] % 2 == 1){
          odds++;
          evens = 0;
      }else{
          evens++;
          odds = 0;
      }
      if (odds == 3){
          console.log("That's odd!");
          odds = 0;
      }else if(evens == 3){
          console.log("Even more so!");
          evens = 0;
      }
  }
}
evensOdds([1,1,1,2,2,1,1,1])
