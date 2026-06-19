const leer = require("prompt-sync")();


function main() {
    let palabra = "Hola juancito";
    let palabraRecortada = "def palabra recortada";

    palabraRecortada=textoRecortar(palabra, 2, 7); //como si fuera un vector (0,1,2 etc) desde donde comienza
    console.log(palabraRecortada);
    

}
main();
/**
 * modulo que recorta un texto
 * @param {string} palabra que va a ser recortada 
 * @param {Number} posInicial numero de posicion inicial
 * @param {Number} posFinal numero de posicion final 
 * @returns retorna la palabra recortada 
 */
function textoRecortar(palabra, posInicial, posFinal) {
    return palabra.slice(posInicial, posFinal+1);// no incluye la ultima letra asique por eso el +1
}
