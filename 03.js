/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function divisores(numero) {
  // La funcion llamada 'divisores' recibe como argumento un numero (entero) 
  // y debe devolver un array con los divisores exactos de 'numero'.
  // Si el numero no tiene divisores ( exeptuando el 1 y el mismo ) deberia devolver el string 'Es primo'
  // Nota: El array no debe contener el 1 y el mismo numero.
  // Por ej:
  // divisores(15) devuelve [3, 5]
  // divisores(11) devuelve 'Es primo'

  // Tu código aca:
  let numeros = [];
  let esPrimo = true;

  for (let x = 2; x < numero / 2; x++) {
    if (numero % x == 0) {
      for (let i = 0; i < numero; i++) {
        if (numero % i === 0) {
          esPrimo = false;
        }
      }
    }
  }
  if (!esPrimo) {
    for (i = 2; i < numero; i++) {
      if (numero % i === 0) {
        numeros.push(parseInt(i));
      }
    }
    return numeros;
  } else {
    return 'Es primo'
  }
}
// No modifiques nada debajo de esta linea //
module.exports = divisores