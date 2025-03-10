/* 
Almacena todas las funciones que se encargan de generar HTML
*/

import { getPokemonId } from '../utils/app-utils.js'
 
export const createPokemon = (pokemon) => {
    return `
        <div class="col-6 col-sm-4 col-xl-3">

            <div class="card p-4 h-100">
                <img height="150px" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${getPokemonId(pokemon.url)}.svg" class="card-img-top" alt="${pokemon.name} image">
                <div class="card-body d-flex align-items-end">
                    <h5 class="card-title text-capitalize text-center w-100">${pokemon.name}</h5>
                </div>
            </div>

        </div>
    `;
}

// No hacer
// const resta = (a, b) => a - b;