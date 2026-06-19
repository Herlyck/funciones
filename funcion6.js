const leer = require("prompt-sync")();
const PORCENTAJE_A = 0.25;
const PORCENTAJE_B = 0.15;
const TOPE_A = 10000;
const TOPE_B = 3000;

function main() {
    let reintegro=0;
    let precio = 25125;
   

    reintegro=calcularReintegro(precio,PORCENTAJE_B,TOPE_B);
    
    console.log("valor de compra:" + precio + "$");
    console.log("reintegro de:" + reintegro + "$");
}


main();

/**
 * modulo de Reintegro
 * @param {number} precio a aplicar el reintegro
 * @param {number} porcentaje del reintegro
 * @param {number} tope del reintegro
 * @returns el reintegro calculado sin superar el tope
 */
function calcularReintegro(precio,porcentaje,tope) {
    let reintegro=0;
    reintegro = precio * porcentaje;
    if (reintegro > tope) {
        reintegro = tope;
    }
    return reintegro;
}

