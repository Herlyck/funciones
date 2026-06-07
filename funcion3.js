const leer = require ("prompt-sync")();
function main(params) {
    
    let contador=0;
    let valor = 0;

    console.log("ingrese valor:");
    contador=Number(leer());
    
    cuentaRegresivaDesde(contador);


    
}
main();

function cuentaRegresivaDesde(contador) {
    console.log(contador-1);
}