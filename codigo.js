// Estructura declarar una variable que tenga un array vacio para que almacene los datos crear una funcion para calcular el IMC con los datos del array

// Menu
"Bienvenido a la Calculadora IMC"
"Para calcular el IMC presione 1 si desea salir presione 2."
"Ingrese su nombre: "
"Ingrese su altura en metros: "
"Ingrese su peso en Kilogramos: " //

// Declarar una variable que tenga un array vacio para que almacene los datos
const datosIMC = []

// Crear una funcion para calcular el IMC con los datos del array
const calcularIMC = (altura, peso) => {
  const cuadradoAltura = altura * altura
  const IMC = peso / cuadradoAltura
  return IMC
}

//Creacion del Menu
let menu = parseInt(prompt("Para calcular el IMC presione 1 si desea salir presione 2."))

// funcion para controlar el menu
function controlMenu(menu) {
  if (menu === 1) {
    return true
  }
  else {
    return false
  }
}

// variable para almacenar el dato de la funcion controlMenu
let opcion = controlMenu(menu)

//Ciclo while para que el menu se repita hasta que el usuario desee salir
while (opcion === true) {
  //pidiendo los datos al usuario
  let nombre = prompt("Ingrese su nombre: ")
  datosIMC[0] = parseFloat(prompt("Ingrese su altura en metros: "))
  datosIMC[1] = parseFloat(prompt("Ingrese su peso en Kilogramos: "))

  // almacenando el resultado de la funcion calcularIMC en una variable
  let resultadoIMC = calcularIMC(datosIMC[0], datosIMC[1])

  // Mostrando el resultado por medio de un alert
  alert (nombre + " tu masa corporal es de " + resultadoIMC)

  menu = parseInt(prompt("Para calcular el IMC presione 1 si desea salir presione 2."))
  opcion = controlMenu(menu)
}