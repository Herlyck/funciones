const leer = require("prompt-sync")();
const REINTEGRO_1 = 0.25;
const REINTEGRO_2 = 0.15;
const TOPE_1 = 10000;
const TOPE_2 = 3000;

function main() {

    let precio = 0;

    resultado = calcularReintegro(precio, REINTEGRO_1, TOPE_1);
    console.log(resultado);





}


main();


function calcularReintegro(precio, porcentaje, tope) {


    console.log("ingrese precio");
    precio = Number(leer());

    if ((precio * porcentaje) > TOPE_1) {
        console.log("no se puede hacer este reintegro");

    } else {
        return precio + (precio * porcentaje)
    }

}