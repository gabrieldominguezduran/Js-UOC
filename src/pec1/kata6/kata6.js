function test() {
  //definimos la funcion test
  console.log(a); // -> hacemos console.log de 'a' que muestra undefinded ya que 'a' todavía no esta definida
  console.log(foo()); // hacemos conole.log de la función foo, muestra '2' porque se llama a la función dentro del console.log y al estar dentro de la función test sabemos cual es la función foo
  var a = 1; // definimos la variable '1' y  le asignamos el valor de 1
  function foo() {
    // definimos la función foo
    return 2; // especificamos el valor que devolvera la función foo
  }
}
test(); //llamamos a la función test
