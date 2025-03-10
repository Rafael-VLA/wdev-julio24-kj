const URL_API = "https://pokeapi.co/api/v2/pokemon";

const getPokemonId = (url) => {
    const list = url.split("/"); // Dividimos cadena del url por /

    const id = list.at(-2); // Obtenemos el penúltimo valor(el id del pokemon) del array 

    return id;
}

const createPokemon = (pokemon) => {
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

$(function(){

    $.getJSON(URL_API, (data) => {

        const pokemons = data.results;

        pokemons.forEach((pokemon) => {
            const pokemonHTML = createPokemon(pokemon)
            $("#pokemon-container").append(pokemonHTML);
        });
        
    })

    
})


// ------ REFEGENCIAS -------
// getPokemons().then((pokemons) => {
//     console.log(pokemons)
// })