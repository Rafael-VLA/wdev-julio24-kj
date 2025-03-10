

// function [nombre_funcion]([mis_paramatros]){}

// Función clásica

// 1. Crear una función que me imprima un saludo por consola
function saludoBasico() { // Función que no recibe ningún parametro
    console.log("¡Hola Rafael!")
}

// 2. Crear una función que imprima un saludo recibiendo un nombre como parametro
function saludo(nombrePersona, paisPersona){ // Un parametro
    // const nombre = "Kevin"
    // const edad = 25;
    return `¡Hola ${nombrePersona}!, vivo en ${paisPersona}`;
}

// 3. Crear una suma de dos numero recibidos como parametros 
//y presentar el resultado por consola

// nombre función  = suma +

// 1. Creo la función
// 2. Agregar los parámetros de la función
// 3. Realizar la operación

function suma(num1, num2){
    const resultado = num1 + num2; // 3 + 3 = 6
    return resultado;
}

const n1 = 3;
const n2 = 3;
const resultadoSuma = suma(n1, n2);

console.log(resultadoSuma)

// Funciones de fleca / Arrow funtions
const multiplicar = (num1, num2) => {
    // ---
    return num1 * num2;
}

const multiplicar2 = (num1, num2) => num1 * num2;

// Funciones Anónimas
const restar = function(num1, num2){
    const result = num1 - num2;
    console.log(result);
};

// Funciones autoejecutables
(() => { 
    console.log("Saludo anónimo")
})();

// Ejecutar

// Ejercicio
// Crear una función que imprimia por consola lo siguiente 
// "Hola, la fecha de hoy es: [date]"
function saludoConFecha(){// ``
    const date = new Date().toDateString();
    console.log("Hola, la fecha de hoy es " + date);
}

const nombre = "Kevin";
const pais = "Costa Rica";

const textoSaludo = saludo("Julanito", "Panamá"); // Ya estoy ejecutando la función

document.querySelector("#texto-saludo").innerText = textoSaludo; 
document.querySelector("#texto-saludo2").innerText = saludo("Pepito", "México"); 
document.querySelector("#texto-saludo3").innerText = `¡Hola Kevin!, vivo en USD`;


saludoConFecha()

const resultado = multiplicar2(10, 5)
console.log(resultado)

restar(10, 3);
