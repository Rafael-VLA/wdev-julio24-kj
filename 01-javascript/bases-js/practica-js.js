
/*
EJERCICIO 1
Titulo: Crear una lista de nombres
Crear una lista llamada nombres que contenga 3 nombres de personas. Luego, usar
console.log() para mostrar el segundo nombre de la lista
*/

//                0         1       2
const personas = ["Rafael", "Pepe", "Pepito"];
//console.log(personas[1])

/*
EJERCICIO 2
Titulo: Acceder a propiedades de un objeto
Crear un objeto llamado persona que tenga las siguientes propiedades: nombre, edad (un
número) y ciudad. Usar console.log() para mostrar el valor de la propiedad nombre.
*/
const persona = {
    nombre: "Rafael",
    edad: 24,
    ciudad: "Limón"
}

//console.log(persona.nombre);


/*
EJERCICIO 3
Titulo: Agregar un elemento a una lista
Crear una lista llamada colores con 3 colores (como "rojo", "verde", "azul"). Luego, agregar
un nuevo color al final de la lista usando push() y mostrar la lista actualizada con
console.log().
*/

const colores = ["rojo", "verde", "azul"];
colores.push("Morado");
//console.log(colores);


/*
EJERCICIO 4
Titulo: Modificar una propiedad de un objeto
Crear un objeto llamado carro con las propiedades marca, modelo y año. Luego, cambiar el
valor de la propiedad año a un número diferente y mostrar el objeto actualizado con
console.log().
*/

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2024
};

carro.anio = 2022;

//console.log(carro);


/*
EJERCICIO 5
Titulo: Crear una función que salude
Escribir una función llamada saludar que reciba un nombre como parámetro y muestre en
consola un saludo que diga "Hola, [nombre]".
*/
const saludo = (nombre) => {
    //console.log(`Hola, ${nombre}`)
}

const nombre = "Pepe";
saludo(nombre);

/* ---------------------------------------- */

/*
EJERCICIO 1
Titulo : Operaciones en una lista de números
Crear una función llamada operacionesLista que reciba como parámetro una lista de
números enteros. La función debe devolver un objeto que contenga la suma, el número
mayor y el número menor de esa lista.
*/

const numeros = [2, 3, 5, 1, 4, 9, 10];
const operacionesLista = (listaNumeros = []) => {
    const resultado = {
        suma: 0,
        mayor: 0,
        menor: 0   
    }

    // ...
    for(let i = 0; i < listaNumeros.length; i++){ // suma = 10
        const currentValue = listaNumeros[i]; // Obtiene el valor actual de iteración
        
        //resultado.suma = resultado.suma + currentValue; // 10 + 1 = 11
        resultado.suma += currentValue;
    }

    const listaOrdenada = listaNumeros.sort((a, b) => a - b); // Ordena la lista numeros

    resultado.menor = listaOrdenada[0];

    resultado.mayor = [...listaOrdenada].pop();

    return resultado;
}

// console.log(operacionesLista(numeros));

/*
EJERCICIO 2
Titulo: Filtrar productos por precio
Dada una lista de objetos que representan productos, cada producto debe tener
propiedades como nombre, precio y categoría. Crear una función llamada filtrarPorPrecio
que reciba esta lista y un valor máximo de precio, y devuelva una nueva lista con los
productos cuyo precio sea menor o igual al valor proporcionado.
*/

// precio [menor o igual] valor 

const productos = [
    {
        nombre: "Laptop Dell XPS 13",
        precio: 999,
        categoria: "Electrónica"
    },
    {
        nombre: "Zapatillas Nike Air Max",
        precio: 120,
        categoria: "Ropa y calzado"
    },
    {
        nombre: "Cámara Canon EOS M50",
        precio: 649,
        categoria: "Fotografía"
    },
    {
        nombre: "Auriculares Sony WH-1000XM4",
        precio: 349,
        categoria: "Accesorios"
    },
    {
        nombre: "Reloj inteligente Apple Watch Series 6",
        precio: 399,
        categoria: "Electrónica"
    },
    {
        nombre: "Silla ergonómica Hbada",
        precio: 179,
        categoria: "Mobiliario"
    },
    {
        nombre: "Libro 'Cien años de soledad'",
        precio: 15,
        categoria: "Literatura"
    },
    {
        nombre: "Smartphone Samsung Galaxy S21",
        precio: 799,
        categoria: "Electrónica"
    },
    {
        nombre: "Perfume Chanel No. 5",
        precio: 120,
        categoria: "Belleza"
    },
    {
        nombre: "Consola PlayStation 5",
        precio: 499,
        categoria: "Videojuegos"
    }
];

// filtrarPorPrecio
function filtrarPrecio(listaProductos, precioMaximo){
    const nuevaListaProductos = [];

    // mi logica
    for(let i = 0; i < listaProductos.length; i++){
        const productoActual = listaProductos[i];

        if(productoActual.precio <= precioMaximo){ // Productos con precio menor o igual al precio maximo
            // ¿Agregar valor a la lista?
            nuevaListaProductos.push(productoActual);
        }
    }

    return nuevaListaProductos;
}

const lista = filtrarPrecio(productos, 200);

//console.log(lista);

const solucionFilter = productos.filter((producto) => producto.precio <= 400);
//console.log(solucionFilter);


/*
EJERCICIO 3
Titulo: Contar palabras en un texto
Crear una función llamada contarPalabras que reciba una cadena de texto como parámetro
y devuelva un objeto donde las claves sean las palabras del texto y los valores representen
cuántas veces aparece cada palabra en el texto. Ignorar las diferencias entre mayúsculas y
minúsculas.
*/


// const test = { resultado previsto
//     "hola": 1, // undefined
//     "Rafael": 2,
//     "Estás": 1,
//     "bien": 1
// }

function contarPalabras(texto = ''){ // Recibimos el texto
    let result = {}; // Creamos el objeto del resultado para guardar la información

    if(texto === ""){ // Preguntamos si el texto es vacio
        throw new Error("El texto no puede estar vacío"); // si lo es lanzamos un error
    }

    // toLocaleLowerCase: convierte las letras en minúscula | Split: Convierte la cadena en una lista
    const palabras = texto.toLocaleLowerCase().split(" "); // Convertimos la cadena de caracteres en una lista con todas palabras en minúscula

    const palSinCarac =  palabras.map((palabra) => { // Guardamos las palabras sin caracter especial
        return palabra.replace(/[.,:¿?¡!-]/g, ""); // Quitamos los caracteres especiales (.,¿?¡!) de cada palabra de la lista
    })

    for(const palabra of palSinCarac){ // Itereamos la lista con las palabras sin caracteres especiales

        let value = 0; // Por cada iteración declaramos un valor temporal para incrementar el valor de una propiedad del objeto resultado

        if(result[palabra] !== undefined){ // Si el valor es diferente de undefined
            value = result[palabra]; // conservo un numero
        }

        result[palabra] = value + 1; // Incrementamos el valor, este puede ser 0 o un número diferente el cual es tomado del propio propio objeto
        //result[palabra] = (result[palabra] || 0) + 1; // Solución resumida del problema
    }

    return result; // devolvemos el objeto solicitado en problema
}


const parrafo = "Hola Rafael. ¿Estás bien, Rafael?";

const solucion = contarPalabras(parrafo); // Ejecutamos la función y guardamos el valor devuelto en la variable solucion
console.log(solucion); // Imprimimos el resultado por consola

