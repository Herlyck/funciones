const leer = require("prompt-sync")();
function main() {
    let numPersonaje=0;
    let impostor=0;
    
    listadoNombres();
    numPersonaje=Number(leer());
    impostor = valorImpostor();
    Decision(numPersonaje, impostor);
}
main();




function Decision(numPersonaje, impostor) {
    if (numPersonaje === impostor) {
        console.log("adivinaste el impostor es", personaje[impostor - 1]);

    } else {
        console.log("no adivinaste el impostor, atencion con", personaje[impostor - 1]);

    }
}

function valorImpostor(impostor) {
    impostor = Math.floor(Math.random() * personaje.length + 1);
    console.log("el numero de impostor es:", impostor);
    return impostor;
}

function listadoNombres() {
     console.log("Selecciona un numero de personaje para encontrar al impostor:");
     personaje = ["Harry Potter",
        "Hermione Granger",
        "Ron Weasley",
        "Albus Dumbledore",
        "Severus Snape",
        "Lord Voldemort",
        "Draco Malfoy",
        "Sirius Black",
        "Rubeus Hagrid",
        "Luna Lovegood"
    ]
    for (let i = 0; i < personaje.length; i++) {
        console.log((i + 1) + "-" + personaje[i]);

    }
}

