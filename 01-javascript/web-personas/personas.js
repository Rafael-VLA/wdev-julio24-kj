const inputNombre = document.getElementById("name"); // Accedemos al input del HTML a través del ID
const inputPhone = document.getElementById("phone");
const inputEmail = document.getElementById("email");
const inputBusqueda = document.getElementById("input-busqueda");

const form = document.getElementsByTagName("form")[0]; // Usamos el nombre del tag para acceder al elemento
const contenedorInfoP = document.querySelector("#lista-personas");

// Tarea 1: Obtener la referencia del formulario de busqueda.
const formBusqueda= document.querySelector("#form-busqueda");

// Tarea 5: Obtener la referencia del botón de limpiar
const btnLimpiar = document.getElementById("btn-limpiar");

const personas = [
    {
        nombre: "Juan Pérez",
        telefono: "555-1234",
        email: "juan.perez@email.com"
    },
    {
        nombre: "María López",
        telefono: "555-5678",
        email: "maria.lopez@email.com"
    },
    {
        nombre: "Carlos Gómez",
        telefono: "555-8765",
        email: "carlos.gomez@email.com"
    },
    {
        nombre: "Ana Torres",
        telefono: "555-4321",
        email: "ana.torres@email.com"
    },
    {
        nombre: "Luis Martínez",
        telefono: "555-1357",
        email: "luis.martinez@email.com"
    },
    {
        nombre: "Laura Sánchez",
        telefono: "555-2468",
        email: "laura.sanchez@email.com"
    },
    {
        nombre: "Pedro Fernández",
        telefono: "555-3579",
        email: "pedro.fernandez@email.com"
    },
    {
        nombre: "Sofía Ruiz",
        telefono: "555-4680",
        email: "sofia.ruiz@email.com"
    },
    {
        nombre: "Miguel Ángel",
        telefono: "555-5791",
        email: "miguel.angel@email.com"
    },
    {
        nombre: "Carla Castillo",
        telefono: "555-6802",
        email: "valeria.castillo@email.com"
    }
];

contenedorInfoP.innerText = JSON.stringify(personas, null, 2);

form.addEventListener("submit", (e) => { // e o event = es un objeto que nos da información del elemento(form)
    e.preventDefault(); // Prevenir el comportamiento por defecto del elemento(form)
    
    const nombre = inputNombre.value;
    const tel = inputPhone.value;
    const email = inputEmail.value;

    const persona = {
        nombre, // => nombre: nombre
        telefono: tel, // El nombre de la propiedad no es igual al nombre la variable, no se puede resumir
        email // => email: email
    }

    if(nombre === "" || tel === "" || email === ""){ // Si al menos una condición es true va entrar
        const campoVacio = obtenerCampoVacio(persona);
        alert(`El campo ${campoVacio} no puede ir vacío`);
        return;
    }

    // Si el campo email no es un correo válido
    if(!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g.test(email))){
        alert(`El email no es correcto`); // Enviar esta alerta
        return; // Terminar función
    }

    // nombre === "" || tel === "" || email === ""
    // if(nombre === ""){ // ||
    //     alert("El campo nombre no puede ir vacío");
    //     return; // Estamos finalizando la función
    // }
    // if(tel === ""){
    //     alert("El campo teléfono no puede ir vacío");
    //     return;
    // }
    // if(email === ""){
    //     alert("El campo email no puede ir vacío");
    //     return;
    // }
    // Crear un objeto persona con la información de los inputs
    // nombre - telefono - email
    // const persona = {
    //     nombre, // => nombre: nombre
    //     telefono: tel, // El nombre de la propiedad no es igual al nombre la variable, no se puede resumir
    //     email // => email: email
    // }

    // Agregar la persona a la lista e imprimir la lista - 2 min
    
    console.log(persona); // Parseamos a JSON

    // Enviar el objeto json al servidor
    // ...

    personas.push(persona);

    // inputNombre.value = '';
    // inputPhone.value = '';
    // inputEmail.value = '';

    console.log(personas);

    contenedorInfoP.innerText = JSON.stringify(personas, null, 2);
})

formBusqueda.addEventListener("submit", (e) => {
    // Tarea 2: ¿Cómo evito el refresh del formulario?
    e.preventDefault();

    // Tarea 3: Imprimir por consola el valor actual del formulario de busqueda
    const valorBusqueda = inputBusqueda.value;

    // Tarea 4: Validar que el campo no esté vacio
    if(valorBusqueda === ""){
        //alert("El campo no puede ir vacío");
        contenedorInfoP.innerText = JSON.stringify(personas, null, 2);
        return;
    }

    if(personas.length === 0){ // Si la lista está vacía
        return alert("La lista está vacía, no se puede realizar la búsqueda");
    }

    const resultadoPersonas = personas.filter((persona) => persona.nombre.toLowerCase().includes(valorBusqueda.toLowerCase()))
    
    contenedorInfoP.innerText = JSON.stringify(resultadoPersonas, null, 2);
});

// Tarea 6: Agregar el evento click al botón de limpiar
btnLimpiar.addEventListener("click", () => {
    if(inputBusqueda.value !== ""){
        inputBusqueda.value = ""; // Setea el valor del input a vacio
    }
})

const obtenerCampoVacio = (obj) => { // objeto a iterar
  
    const keys = Object.keys(obj); // [ 'nombre', 'telefono', 'email' ]
    
    for(const key of keys){
      const value = obj[key]; // accediendo al valor
      
      if(value === ""){
        return key;
      }
    } 
}