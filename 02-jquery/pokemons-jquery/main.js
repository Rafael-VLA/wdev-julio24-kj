// Tarea - valor: 1%
// Importar la función createPokemon
import { URL_API_JSONPLACEHOLDER,URL_API_POKEMON } from './js/config/constants.js';
import { createPokemon } from './js/partials/app-partials.js';
import pokemonService from './js/service/pokemon-service.js';
import { fetchGenerico } from './js/utils/fetch-generico.js';

$(async function(){
    const { getPokemons } = pokemonService;
    
    // const pokemons = await pokemonService.getPokemons();
    const pokemons = await getPokemons();
    // const { results:pokemons } = await fetchGenerico(URL_API_POKEMON);

    pokemons.forEach((pokemon) => {
        const pokemonHTML = createPokemon(pokemon)
        $("#pokemon-container").append(pokemonHTML);
    })

    // const posts = await fetchGenerico(`${URL_API_JSONPLACEHOLDER}/posts`, "POST", {
    //     title: 'foo',
    //     body: 'bar',
    //     userId: 1,
    //   })

    // console.log(posts);
})


// ------ REFEGENCIAS -------
// getPokemons().then((pokemons) => {
//     console.log(pokemons)
// })