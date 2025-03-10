
// ------------------------------- Referencia de un elemento -------------------------------

// con getElementById
const tituloId = document.getElementById("titulo-principal");
const tituloIdQ = document.querySelector("#titulo-principal"); // Buscando el elemento por id

// con getElementsByClassName
const tituloClass = document.getElementsByClassName("green"); 
const tituloClassQ = document.querySelector(".titulo-principal"); // Buscando el elemento por clase

// con getElementsByTagName
const tituloTag = document.getElementsByTagName("span");
const tituloTagQ = document.querySelectorAll("span"); // Buscando el elemento por nombre del tag

// getElementsByName
const pepitoInput = document.getElementsByName("pepito");
const tituloInputName = document.querySelectorAll("input[name]"); // Buscamos el elemento apartir del atributi name y su valor


// con query selector
const h1Primero = document.querySelector(".container > h1"); // Primer h1 hijo del elemento
const h1SegundoList = document.querySelectorAll(".container h1"); // Segundo elemento h1 del container 
const h1SegundoEspecifico = document.querySelector(".container h1:nth-child(2)");


// Solución tarea
const solucion1 = document.querySelector(".contenedor-principal p");
const solucion2 = document.querySelector(".contenedor-principal > div > p");
const solucion3 = document.querySelector(".contenedor-principal > div").querySelector("p");

// ------------------------------- Eventos -------------------------------
const btn = document.querySelector("#btn-saludar");
const divBtn = document.querySelector(".div-saludar");

// click

// 1. forma (recomenda)
btn.addEventListener("click", () => {
    alert("Hola desde addEventListener!")
})

// 2. Segunda forma (no recomenda)
// btn.onclick = () => {
//     alert("Hola desde onclick")   
// }

// 3. Forma (no recomenda)
// const handleSaludar = function(nombre) {
//     alert("Hola desde función" + " - " + nombre) 
// }

divBtn.addEventListener("click", (e) => {
    console.log(e.target.innerText)
    alert("Hola desde addEventListener con div!")
})

// blur
const inputBlur = document.getElementById("input-blur");

inputBlur.addEventListener("blur", () => {
    const value = inputBlur.value

    if(value.length === 0){
        alert("Valor de campo incorrecto")
    }
})

// focus
const inputFocus = document.querySelector("#input-focus");

inputFocus.addEventListener("focus", () => {
    console.log("Focus")
})

inputFocus.addEventListener("input", (event) => {
    console.log(event.target.value)
    console.log(inputFocus.value)
})

// Insertar elementos al DOM
const containerIns = document.querySelector("#container-insert");

// Insertar un tag p con el texto de "hola soy p"

// const idT = "HOLA2" ;
// containerIns.innerHTML = `
// <p>Hola soy p</p>
// <strong class="color-blue" id="${idT}">Soy strong</strong>
// `;

const textoP = document.createElement("p");
textoP.innerText = "hola soy p";

const strong = document.createElement("strong");
strong.innerText = "Soy strong";

// Agregar una clase
strong.classList.add("color-red", "gray");
strong.classList.add("color-blue");

// Remueve una clase
strong.classList.remove("color-red");

// Agrega un atributo al elemento
strong.setAttribute("id", "HOLA");

containerIns.append(textoP, strong);
// containerIns.appendChild(textoP);
// containerIns.appendChild(strong);


// Usando el body para inyectar un div al final
const bodyElement = document.querySelector("body");

const divEjemplo = document.createElement("div");

const pEjemplo = document.createElement("p");
pEjemplo.innerText = "Ejemplo con P";

divEjemplo.append(pEjemplo);

bodyElement.appendChild(divEjemplo);

// div ubicado en una parte del HTML gracias a la propiedad flex de mi contenedor
const containerCoor = document.querySelector(".container-coor");

containerCoor.innerHTML = `
<div style="width: 40px; height: 40px; background: #000;">
</div>
`;

// Tarea
// Crear un nodo img con un width de 250px 
// e inyectarlo en el container-img 
// con una imagen de preferencia
const containerImg = document.querySelector("#container-img");

// containerImg.classList.add("container-flex-center");

containerImg.style.display = "flex";
containerImg.style.justifyContent = "center";

const imgGato = document.createElement("img");

imgGato.src = "https://www.miau.com.mx/wp-content/uploads/2014/09/gatito.jpg";
imgGato.width = "250";
imgGato.alt = "Imagen de un gato";
imgGato.id = "gato1";

containerImg.appendChild(imgGato);

// Remover atributos de un elemento
const imgGatoDOM = document.getElementById("gato1");

imgGatoDOM.removeAttribute("id");

// Agregar estilos a un elemento desde JS
const divCircle = document.getElementsByClassName("circle")[0];

// style="background-color: red; width: 100px; height: 100px; border-radius: 50%;"

divCircle.style.backgroundColor = "red";
divCircle.style.width = "100px";
divCircle.style.height = "100px";
divCircle.style.borderRadius = "50%";
