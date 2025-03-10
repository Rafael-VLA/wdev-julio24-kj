/*
Archivo Utils
Almacena funciones genéricas que pueden ser usadas en cualquier parte
de nuestra aplicación
*/


const getPokemonId = (url) => {
    const list = url.split("/"); // Dividimos cadena del url por /

    const id = list.at(-2); // Obtenemos el penúltimo valor(el id del pokemon) del array 

    return id;
}

const suma = (a, b) => a + b;

// Otras funciones genéricas

export {
    getPokemonId,
    suma
}