const leer = require ("prompt-sync")();
function main() {
    let nombre="def";

    console.log("ingrese un nombre:")
    nombre=leer();
    
    nombreSaludar(nombre);
}
main();

function nombreSaludar(nombre) {
    console.log(`que tengas un buen dia ${nombre}`);
    
};