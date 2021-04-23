// 5) Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].

function countPositive(arr){

    

    let contador=0;

    for(let i=0; i<arr.length;i++){
        if(arr[i]>0){
          contador+=1
        }

    }
    arr.pop();
    arr.push(contador);
    return arr;


}

var resultado= countPositive([2,3,5,6,7,8,-2,-4,-5,-7]);
console.log(resultado);





function countPositives(arr){
  var positives = 0;
  for (var i = 0; i < arr.length; i++){
      if (arr[i] > 0){
          positives++;
      }
  }
  arr[arr.length-1] = positives;
  return arr;
}
console.log(countPositives([2,3,5,6,7,8,-2,-4,-5,-7]));