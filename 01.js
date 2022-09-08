/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function menorMayor(numeros) {
  // La función llamada 'menorMayor' recibe como argumento un arreglo de números llamado 'numeros' y debe devolver un
  // arreglo que contenga el menor número del arreglo 'numeros' en la posición cero y el mayor número del arreglo
  // 'numeros' en la posición 1.
  // Ej:
  // menorMayor([4, 6, 1, 7, 15]) debe retornar [1, 15]
  // ya que 1 es el número más chico (menor) dentro del arreglo [4, 6, 1, 7, 15]
  // y 15 es el número más grande (mayor) dentro del arreglo [4, 6, 1, 7, 15]

  // Tu código aca:
  console.table(numeros);
  let resultado = [0,0];
  let mayor = numeros[0];
  let menor = numeros[0];
  for (let index = 1; index < numeros.length; index++) {
    if(numeros[index] < menor){
      menor = numeros[index];
    }else if(numeros[index] > mayor){
      mayor = numeros[index]
    }
  }
  resultado[0] = menor;
  resultado[1] = mayor;
  console.table(resultado);
  return resultado;
}
// No modifiques nada debajo de esta linea //

module.exports = menorMayor