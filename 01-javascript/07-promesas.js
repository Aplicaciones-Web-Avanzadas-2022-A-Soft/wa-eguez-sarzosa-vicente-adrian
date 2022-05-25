// 07-promesas.js
const fs = require('fs');

function promesaEsPar(numero) {
    const miPrimerPromesa = new Promise( // Definicion de la promesa
        (
            resolve, // funcion return
            reject // funcion throw
        ) => {
            if (numero % 2 == 0) {
                resolve(numero); // return numero -> resolve() : return undefined
            } else {
                reject('No es par =('); //  Throw 'No es par :('
            }
        }
    )
    return miPrimerPromesa
}

promesaEsPar(2)
    .then( // return
        (respuesta)=>{
            console.log('Respuesta: ', respuesta);
        }
    )
    .catch( // throw
        (error)=>{
            console.error('Error: ', error);
        }
    )
    .finally( // finally
        ()=>{
            console.info('Fin');
        }
    );
