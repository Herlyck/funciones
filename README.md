# funcion

const leer = require("prompt-sync")();
function main(params) {

    let segundos = -1;
    segundos = 3;


    console.log(segundos); //mostrar antes de que comience el intervalo
    const idInterval = setInterval(() => {
        //codigo
        segundos--;
        console.log(segundos);

        if (segundos === 0) {
            clearInterval(idInterval); // la forma en que termina el intervalo, necesita el argumento del intervalo a detener
        }

    }, 1000);  //1000 mseg = 1seg









otro ejercicio viendo por mi cuenta

    const leer = require('prompt-sync')();

const personajes = ["Harry Potter", "Newt Scamander"];
const MAX_FIL = 7;
const MAX_COL = 10;
const MOVIMIENTO_CASILLAS = 1;
const MSJ_INICIAL = "Yo juro solemnemente que mis intenciones son malas";
const MSJ_FINAL = "Travesura realizada";

function main() {
    let filaHarry = Math.floor(Math.random()*7);
    let colHarry = Math.floor(Math.random()*10);

    let filaNewt = Math.floor(Math.random()*7);
    let colNewt = Math.floor(Math.random()*10);
    
    const tablero = [];
    for (let fila = 0; fila < MAX_FIL; fila++) {
        tablero[fila] = []; //es lo que hace el .push([])
        for (let col = 0; col < MAX_COL; col++) {
            tablero[fila][col] = ".";  //tablero[fila].push(".") es otra forma de hacerlo esta q esta ahora
        }

    }
    tablero[filaHarry][colHarry]= "Harry Potter";
    tablero[filaNewt][colNewt]= "Newt Scamander";
    if (filaHarry === filaNewt && colHarry===colNewt){
        console.log("se encontraron");
        
    }
    console.log("\t ### " + MSJ_INICIAL + " ###");
    console.table(tablero);







}
main();






}
main();