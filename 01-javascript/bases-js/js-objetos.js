


// Objeto
/*
Descripción.
Estructura de datos de javascript que permite guardar 
información mediante propiedades clave y valor
*/

// [Cómo crear un objeto]

// Con la clase Object
const mascota = new Object(); // Una instancia es un machote(template) de la clase Object
//mascota.nombre = "Pepito";
//mascota.raza = "felino";

//console.log(mascota)


// Objeto literal - Forma más clásica de crear un objeto
const persona = { // persona
  nombre: "Rafael",
  edad: 24
}

/*
const [nombre_objeto] = {
  [clave1]: [valor1],
  [clave2]: [valor2],
  ...
}
*/

//console.log(persona)

// Con función 
function Vehiculo(modelo, color){ // Simula lo que es una clase
    this.modelo = modelo;
    this.color = color;
}

const carro1 = new Vehiculo("Toyota", "Rojo");

//console.log(carro1)

// [Cómo obtener el valor de una propiedad]

const nombrePersona = persona.nombre; // primera forma de acceder al valor de un objeto
// console.log(nombrePersona);

const edadPersona = persona["edad"];
// console.log(edadPersona);

const empresa = {
  nombreEmpresa:"VLA",
  area: "educación"
}

console.log(empresa.nombreEmpresa);

// [Cómo cambiar el valor de una propiedad]
persona.nombre = "Pepe"; // Cambiando la propiedad de nombre
persona["edad"] = 25;

// console.log(persona);

// [Cómo agregar una nueva propiedad]
persona.tel = "87654321"; // Como no existe esta propiedad js la crea en nuestro objeto
// console.log(persona);

// Se utilizo el numero pero ya no se necesita

// [Cómo eliminar una propiedad]
delete persona.tel; // Eliminamos la propiedad tel
// console.log(persona)

// [Cómo obtener las claves de un objeto]
const clavesPersona = Object.keys(persona);
// console.log(clavesPersona);

// [Cómo obtener las llaves de uun objeto]
const valoresPersona = Object.values(persona);
// console.log(valoresPersona);

// [Cómo evitar cambiar un objeto]
const empleado = {
    id: "001",
    nombre: "Julio",
    puesto: "web developer"
}

//...

empleado.ubicacion = "Limón";

Object.freeze(empleado)

delete empleado.nombre;

// console.log(empleado)

// [Guardar arrays en objetos y otros tipos de datos]
const persona2 = {
    nombre: "Julanito",
    edad: 24,
    esHombre: true,
    habilidadesBlandas: ["Responsable", "Análitico", "Persistencia"],
    saludoPersonal: function(){ // función anónima
        console.log("Hey, hola!")
    },
    ubicacion: {
        ciudad: "Cartago",
        pais: "Costa Rica",
        coordenadas: {
            lat: -635468,
            alt: -17654
        },
        coordenadasLista: [-635468, -17654]
    }
}

// 1. Obtener el objeto de las coordenadas de la persona
const ubicacion = persona2.ubicacion;
// console.log(ubicacion)

const coordenadas = ubicacion.coordenadas;
// console.log(coordenadas);

// const valoresUbicacion = Object.values(temporal) // mi objeto ubicacion
// console.log(valoresUbicacion[2])

// 2. Obtener la alt de la persona
// console.log(coordenadas.alt);
// console.log(persona2.ubicacion.coordenadas.alt)

// 3. Crear un nuevo objeto con el nombre y las coordenadas de la persona

//const nombrePersona2 = persona2.nombre;
const coordenadas2 = persona2.ubicacion.coordenadas;

const infoPersona = {
    nombre: persona2.nombre,
    coordenadas: coordenadas2
}

//console.log(infoPersona)

// 4. Eliminar la propiedad coordenadasLista del objeto
//delete persona2.ubicacion.coordenadasLista;

ubicacion.nueva = "Algo"

//console.log(persona2)


const curso = {
    siglas: "001-C",
    nombre: "JavaScript"
}

// Primera forma de realizar clone - Usando la función assign
//const copiaCurso = Object.assign({}, curso);


// Segunda forma - Usando el operador spreed
const copiaCurso = { ...curso }; // Esparsimos las propiedades del objeto y por ende se crea un clone

copiaCurso.nombre = "PHP";

console.log(copiaCurso)
console.log(curso)




