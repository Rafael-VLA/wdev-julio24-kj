
/*
0 - Pendiente
1 - En proceso
2 - Terminado
*/
const estado = 1;

if(estado === 0){
    console.log("Pendiente")
}

if(estado === 1){
    console.log("En proceso")
}

if(estado === 2){
    console.log("Terminado")
}

if(estado !== 0 && estado !== 1 && estado !== 2){
    console.log("Estado es desconocido")
}

switch(estado){
    case 0:
        console.log("Pendiente");
    break;

    case 1:
        console.log("En proceso");
    break;

    case 2:
        console.log("Terminado")
    break;

    default:
        console.log("Estado es desconocido");
    break;
}


// Tip
const estados = {
    0: "Pendiente",
    1: "En proceso",
    2: "Terminado"
}

console.log(estados[0])
