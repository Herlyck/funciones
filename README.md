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






}
main();