const leer = require ("prompt-sync")();

function main() {
    
    nombreSaludar("Sara");
    nombreSaludar("Berta");
    nombreSaludar("Juan");
}
main();

function nombreSaludar(nombre) {
    console.log(`que tengas un buen dia ${nombre}`);
    
};