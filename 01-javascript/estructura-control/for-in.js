
const persona = {
    nombre: "Rafael",
    edad: 24,
    ciudad: "Limón"
}

const keys = Object.keys(persona); // ['nombre', 'edad', 'ciudad']

console.log(keys);

// keys.forEach((key) => {
//     console.log(key)
// })

// for (const key of keys) {
//     console.log(key)
// }

for (const key in persona) {
    const value = persona[key]; // Accedemos al value actual del key actual.

    if(!isNaN(parseInt(value))){ // Preguntar si el valor actual es un númeto
        console.log(`La propiedad ${key} es un número porque tiene el valor: ${value}`);
    }
    
    if((typeof value) === 'number'){
        console.log(`La propiedad ${key} es un número porque tiene el valor: ${value}`);
    }
}

// const suma = (a, b) => parseInt(a) + parseInt(b);
// console.log(suma("5", "4"))