
// --------------------------- MANIPULACIÓN DEL DOM ---------------------------
// $([elemento])

// Cambiando texto
document.getElementsByTagName("h1")[0].innerText = "Cambio con vanilla JS"; // Vanilla = Uso puro de JS 

$("#title").text("Cambio title con JQuery");

// Inyectar nodos(elementos,tags html) al DOM

// html, append
//$(".container").html("<h2>Titulo del contenedor</h2>"); // similar al innerHTML
// $(".container").html("<p>Soy una descripción</p>");
//console.log($(".container").html());

const nombrePersona = "Rafael";
$(".container").append(`<h2>Mi nombre es ${nombrePersona}</h2>`); // Agrega el elemento al final del contenedor

$("#description-span").before("<p><strong>Soy before</strong></p>");
$("#description-span").after("<p><strong>Soy after</strong></p>");

$("#description-span").wrap("<p id='container-span'></p>");

$(".container").prepend(`<h2>Mi nombre es ${nombrePersona} - Agregado con prepend</h2>`); // Agrega el elemento al inicio del contenedor


// Tarea
// Crear un contenedor que tenga el id "contenedor-tarea", debe tener el texto de
// "Tarea realizada"(usar una etiqueta p), este contenedor debe ser el 
// primer elemento del div con clase "container"


// Solución 1
const divContenedorTarea = `
    <div id="contenedor-tarea">
        <p>Tarea realizada</p>
    </div>
`;
$(".container").prepend(divContenedorTarea);

// Solución 2
// $(".container").prepend('<div id="contenedor-tarea"></div>');
// $("#contenedor-tarea").append('<p>Tarea realizada</p>');

// Solución 3
// $(".container").prepend('<p>Tarea realizada</p>');
// $(".container p:first").wrap('<div id="contenedor-tarea"></div>');

// --------------------------- METODOS ---------------------------
// $("#list li") // selecciona todos los li existentes de ese elemento
// $("#list > li") // selecciona los li hijos

$("#list > li").each((_, element) => {
    const value = element.innerText;

    console.log(value)
});

const tamanio = $("#list > li").length; 
console.log(tamanio);

console.log($("#list > li").get(2));

$(".test-word").add("#test2").css("color", "green"); // Add = Agrupa elementos 

$("#test3").remove();

console.log($("#description-span").parent());

const isBlue = false;

$("#title").css({
    color: isBlue ? "blue" : "green",
    textDecoration: "underline",
    fontSize: "24px"
});

const nombre = $("#name").val();
$("#name").val("Pepito");
console.log(nombre)

$("#title").addClass("title red");
$("#title").removeClass("title");


// --------------------------- EVENTOS ---------------------------

// bind
// $("#btn-saludar").bind("click", function(){
//     console.log("Hola con bind")
// });

// setTimeout(() => {
//     $("#btn-saludar").unbind("click")
// }, 10000);

// $("#btn-saludar").on("click", function(){
//     console.log("Hola con on")
// });

// setTimeout(() => {
//     $("#btn-saludar").off("click")
// }, 10000);

// $("#btn-saludar").one("click", function(){
//     console.log("Hola con one")
// });

$("#btn-saludar").click(function(){
    console.log("Saludo desde click")
})

$("#name").on("input", function(){
    const value = $(this).val();

    console.log(value)
})


// --------------------------- AJAX (FETCH) ---------------------------


// HTTP GET - Obtener recurso
$.ajax({
   url: "https://jsonplaceholder.typicode.com/posts",
   method: "GET"
}).done(function(data){ // done = me obtiene el resultado de la petición
    console.log(data)
}).fail(function(err){ // fail = atrapa los errores no controlados por el servidor
    console.log("Algo pasó")
});

// $.ajax({
//     url: "https://jsonplaceholder.typicode.com/users",
//     method: "GET",
//     success: function(data){
//         console.log(data)
//     },
//     error: function(err){
//         console.log(err)
//     }
// })

$.getJSON(
    "https://jsonplaceholder.typicode.com/users", 
    (data) => {
        console.log(data)
    }
);

// HTTP POST - Agregar recurso
const post = {
    title: 'foo',
    body: 'bar',
    userId: 1,
}

// $.ajax({
//     url: "https://jsonplaceholder.typicode.com/posts",
//     method: "POST",
//     dataType: 'json',
//     data: post,
//     success: (data) => {
//         console.log(data)
//     }
// })

$.post("https://jsonplaceholder.typicode.com/posts", post, (data) => {
    console.log(data)
}).fail((err) => {
    console.log(err)
});

// HTTP PUT
const postUpdate = {
    title: 'JQuery',
    userId: 10,
}

const success = (data) => {
    const valorMostrar = JSON.stringify(data, null, 2)
    $("#data-put").text(valorMostrar);
}

$.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/88",
    method: "PUT",
    dataType: 'json',
    data: postUpdate,
    //success // success: success
}).done(success);

// HTTP DELETE
$.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/30",
    method: "DELETE",
    success: (data) => {
        console.log(data);
    }
});