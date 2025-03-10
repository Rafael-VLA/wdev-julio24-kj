/* 
Almacena metodos relacionados a un servicio de terceros.
En este caso se usa el API de pokeapi para obtener datos de pokemons.

*/

// export default
// import constants from 'PATH'

// export
// import { misFunciones } from 'PATH'
import { URL_API_POKEMON } from '../config/constants.js'; // IMPORTANTE AGREGAR LA EXTENSIÓN JS

const getPokemons = () => {
    return new Promise((resolve, reject) => {
        
        $.getJSON(URL_API_POKEMON, (data) => {
            const pokemons = data.results;
            resolve(pokemons);
        }).fail((err) => {
            reject(err);
        });

    })
}

export default {
    getPokemons
}