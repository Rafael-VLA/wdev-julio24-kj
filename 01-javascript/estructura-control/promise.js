
// const holaMundoPromise = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Hola mundo")
//         }, 2000)
//     })
// }

// pizzaNoEntragada == true = La pizza no pudo ser entregada
// pizzaNoEntragada == false = La pizza fue entregada
const solicitarPizza = (pizzaNoEntragada = false) => { // Va a simular si la pizza no fue entregada
    return new Promise((resolve, reject) => {
        console.log("Se solicitó la pizza");
        setTimeout(() => {
            // Se ejcuta después de 5 segundos

            if(pizzaNoEntragada === true){
                reject("Ups, algo pasó con la pizza, no se pudo entregar.");
            }
    
            resolve("Pizza"); // si es true, la pizza fue entregada correctamente
        }, 5000); // 3 seg
    });
}

const solicitarHamburguesas = (hamburguesaNoEntragada = false) => {
    return new Promise((resolve, reject) => {
        console.log("Se solicitó la hamburguesa");
        setTimeout(() => {
            if(hamburguesaNoEntragada === true){
                reject("Ups, algo pasó con las hamburguesas, no se pudieron entregar.");
            }
    
            resolve("Hamburguesas");
        }, 3000);
    });
}

// solicitarPizza()
//     .then((msg) => { // La data en caso de que la promesa sea exitosa
//         console.log(msg)
//     })
//     .catch((err) => { // La data(error) en caso de que la promesa no sea exitosa
//         console.error(err)
//     })
//     .finally(() => { // Esta función se ejecuta una vez finalizada la promesa
//         //console.log("La promesa ya finalización")
//     })

// solicitarHamburguesas()
// .then((msg) => {
//     console.log(msg)
// })
// .catch((err) => {
//     console.error(err)
// })
// .finally(() => {
//     //console.log("La promesa ya finalización")
// })


// Promise.all([solicitarPizza(), solicitarHamburguesas()])
// .then((values) => {
//     console.log(values);
// })
// .catch((err) => {
//     console.error(err)
// })

const solicitarComida = async() => { // Es una promesa
    try {
        const resultPizza = await solicitarPizza(); // pizza
        const resultHamburguesas = await solicitarHamburguesas();
        
        return `Mi alimento es ${resultPizza} y ${resultHamburguesas}`;
    } catch(err) {
        // console.error("Error desde adentro", err)
        throw new Error(err);
    }
}

solicitarComida()
.then(data => {
    console.log(data)
})
.catch((err) => {
    console.error("Error desde fuera", err)
})