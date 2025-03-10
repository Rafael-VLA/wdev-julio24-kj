

// GET

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => {

//     res.json()
//     .then((data) => {
//         console.log(data)
//     })

// });


// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(data => {
//     console.log(data)
// })
// .catch((err) => {
//     console.log(err)
// })


// POST

const user = {
    name: "Rafael Sequeira S.",
    username: "RafelSS",
    phone: "+506 8516 9415"
}

// console.log(user)
// console.log(JSON.stringify(user))

// fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(user)
// }).then(res => {
//     return res.json()
// }).then(data => {
//     console.log(data)
// })

const userUpdate = {
    username: "RafelSS_321",
    phone: "+506 8516 9416"
}

// PUT
// fetch("https://jsonplaceholder.typicode.com/users/1", {
//     method: "PUT",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(userUpdate) // parsea el objeto a un json
// }).then((res) => {

//     if(res.ok === false){ // Si las respuesta tiene un error (4xx)
//         throw new Error("El recurso no se encontró"); 
//     }
    
//     return res.json(); // Extraemos la información del JSON

// }).then((data) => { // Obtenemos la data
//     console.log(data)

// }).catch(err => {
//     console.error(err)
// })

// DELETE
fetch("https://jsonplaceholder.typicode.com/users/4", { method: "DELETE" })
.then((res) => {
    return res.json()
})
.then((data) => {
    console.log(data)
})
