const leer = require("prompt-sync")();
const DOLAR = 1450;
const EURO=1660;

function main() {
    // let cantPesos = 0;
    // let dolares = 0;

    // cantPesos = cantidadPesos();
    // dolares = convertirADolar(cantPesos);
    // mostrarInformeConversion(dolares);
    mostrarInformeConversion(convertirADolar(cantidadPesos())); //de fin a principio va esta linea 
   
}
main();



/**
 * Muestra informe de conversion en consola
 * @param {Number} dolares positivos a mostrar en consola
 */
function mostrarInformeConversion(dolares) {
    console.log("dolares: " + dolares);
}


/**
 * solicita ingresar pesos en consola
 * @returns pesos ingresados en consola
 */
function cantidadPesos() {   //extract to funcion in global scope. Si no tengo el parametro tengo q crear variable.
    console.log("ingrese cantidad de pesos:");
    return Number(leer());
}


/**
 * 
 * @param {Number} cantPesos positivos a dolar
 * @returns valor de pesos en dolar
 */
function convertirADolar(cantPesos) {
    return cantPesos / DOLAR;
}



/*
descarto las variables porque no las estaba utilizando para otra cosa, ya que aca no necesitamos guardar el valor de dolar
si tuvieramos que guardar va con variables.
*/ 

