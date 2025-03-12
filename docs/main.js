
// Tarea: Obtener el contenedor de los pokemons
const containerPokemons = document.getElementById("pokemon-container");

// const getPokemonsPromise = () => { // Solución con promesas
//     return new Promise((resolve, reject) => {
//         fetch("https://pokeapi.co/api/v2/pokemon")
//         .then((res) => res.json())
//         .then((data) => resolve(data.results) )
//         .catch(err => {
//             reject(err)
//         })
//     })
// }

const getPokemons = async() => { // Solución con async / await
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");

    if(!res.ok){ // Error 4xx
        throw new Error("No se pudo obtener la data");
    }

    const data = await res.json();

    return data.results;
}

// pokemons.forEach((pokemon) => {
//     html += createPokemon(pokemon); 
// });


const getPokemonId = (url) => {
    const list = url.split("/"); // Dividimos cadena del url por /

    const id = list.at(-2); // Obtenemos el penúltimo valor(el id del pokemon) del array 

    return id;
}

const createPokemon = (pokemon) => {
    return `
        <div class="col-6 col-sm-4 col-xl-3">

            <div class="card p-4 h-100">
                <img height="150px" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${getPokemonId(pokemon.url)}.svg" class="card-img-top" alt="bulbasaur image">
                <div class="card-body d-flex align-items-end">
                    <h5 class="card-title text-capitalize text-center w-100">${pokemon.name}</h5>
                </div>
            </div>

        </div>
    `;
}


document.addEventListener("DOMContentLoaded", async() => { // Una vez esté cargo del DOM se ejecuta el bloque de código

    // getPokemons().then((pokemons) => { // usando promesa
    //     console.log(pokemons)
    // })

    const pokemons = await getPokemons(); // usando async / await

    console.log(pokemons)

    let html = '';

    pokemons.forEach((pokemon) => {
        html += createPokemon(pokemon); 
    });
    
    containerPokemons.innerHTML = html;
});