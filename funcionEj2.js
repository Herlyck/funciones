const leer = require('prompt-sync')();

const personajes = ["Harry Potter", "Newt Scamander"];
const MAX_FIL = 7;
const MAX_COL = 10;
const MOVIMIENTO_CASILLAS = 1;
const MSJ_INICIAL = "Yo juro solemnemente que mis intenciones son malas";
const MSJ_FINAL = "Travesura realizada";
const CASILLA_VACIA = ". ";
const tablero = [];

const SIMB_PERSONAJE_1 = "H ";
const SIMB_PERSONAJE_2 = "N ";

const personaje1 = {
    posY: 1,
    posX: 3
}

const personaje2 = {
    posY: 3,
    posX: 1
}

function main() {
    let msjIngresado = "def msj ingresado";

    crearTablero();
    while (msjIngresado != MSJ_FINAL) {
        console.clear(); //al principio o final limpias consola
        tablero[personaje1.posY][personaje1.posX] = SIMB_PERSONAJE_1;
        tablero[personaje2.posY][personaje2.posX] = SIMB_PERSONAJE_2;

        console.log("\t ### " + MSJ_INICIAL + " ###");

        mostrarTablero();
        console.log("ingresa mensaje secreto para finalizar o cualquiera para continuar");

        msjIngresado = leer();
    }

}
main();
/**
 * muestra el tablero en consola
 */
function mostrarTablero() {
    for (let fil = 0; fil < tablero.length; fil++) {
        process.stdout.write("\t\t\t"); //tabula la fila
        for (let col = 0; col < tablero[fil].length; col++) {
            process.stdout.write(tablero[fil][col]);

        }
        console.log();
    }
}

//tablero esta en el ambito global no hay que pasarle ningun argumento ni pasarle ningun parametro

/**
 * crea tablero con las dimensiones correspondientes
 */
function crearTablero() {
    for (let fila = 0; fila < MAX_FIL; fila++) {
        tablero[fila] = []; //es lo que hace el .push([])
        for (let col = 0; col < MAX_COL; col++) {
            tablero[fila][col] = CASILLA_VACIA;
        }
        //creacion de tablero
    }
}

