

const edad = 19;
//const estado = 1; // 0 = inactivo, 1 = activo 

// if(edad >= 18){
//     console.log("Es mayor");
// } else {
//     console.log("Es menor");
// }

// ([condición]) ? [Ejecutar en caso de ser cierta] : [Ejecutar en caso de que no sea cierta]
//edad >= 18 ? console.log("Es mayor") : console.log("Es menor");

let estadoActual;

// Forma simplificada => const estadoActual = estado === 0 ? "Inactivo" : "Activo";
const estado = 1;

if(estado === 0){
    estadoActual = "Inactivo";
} else {
    estadoActual = "Activo";
}

console.log(estadoActual);


const nuevoEstado = (estado === 0) 
? "Pendiente" : (estado === 1) 
? "En proceso" : (estado === 2) 
? "otro estado" : "Terminado";

console.log(nuevoEstado)
