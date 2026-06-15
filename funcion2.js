const leer = require ("prompt-sync")();

function main() {
    
    nombreSaludar("Sara");
    nombreSaludar("Berta");
    nombreSaludar("Juan");
}
main();

/**
 * saluda a una persona con su nombre y un mensaje
 * @param {String} nombre este parametro se usa para saludar con un mensaje
 */

function nombreSaludar(nombre) {
    console.log(`que tengas un buen dia ${nombre}`);
    
};