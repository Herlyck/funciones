const leer = require("prompt-sync")();
function main() {

    let segundos = -1;

    console.log("ingresa el segundo donde iniciara la cuenta regresiva");
    segundos = Number(leer());
    
    
    cuentaRegresivaDesde(segundos); //este segundos no esta en el otro modulo entonces lo envio con el mismo nombre y lo modifico con f2

}
main(); //funcion main (activa subalgoritmos)


                                //le modificas a segundos con F2 por segundosInicial
/**
 * Inicia cuenta regresiva desde el segundo recibido
 * @param {Number} segundosInicial a usar para la cuenta regresiva (inclusive)
 */
function cuentaRegresivaDesde(segundosInicial) {

    console.log("iniciando cuenta regresiva...");
    console.log(segundosInicial); //mostrar antes de que comience el intervalo

    const idInterval = setInterval(() => {
        //codigo
        segundosInicial--;
        console.log(segundosInicial); 

        if (segundosInicial <= 0) {
            clearInterval(idInterval); // la forma en que termina el intervalo, necesita el argumento del intervalo a detener
        }

    }, 1000);  //1000 mseg = 1seg
}