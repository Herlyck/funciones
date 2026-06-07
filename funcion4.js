const leer = require ("prompt-sync")();
const DOLAR=1450;

function main(params) {
    let cantPesos=0;

    console.log("ingrese cantidad de pesos:");
    cantPesos=Number(leer());

    resultado=convertirADolar(cantPesos);
    console.log(resultado);
    
    
}
main();

function convertirADolar(cantPesos) {
    return cantPesos / DOLAR;
}