
//Funcion para crear el inventario en la vista del Administrador
function Inventario (){
    // Crea el objeto
    function Producto (nombreProducto, descProducto, stock, precioProducto){
        this.nombreProducto = nombreProducto;
        this.descProducto = descProducto;
        this.stock = stock;
        this.precioProducto = precioProducto;
    }
    let ingNombreProducto = prompt ('Ingrese Nombre Producto:');
    let ingDescProducto = prompt ('Ingrese Descripción de Producto:');
    let ingStock = prompt ('Ingrese Cantidad:');
    let ingPrecioProducto = prompt ('Ingrese Precio Producto:');
    // pasa los parametros ingresados al objeto
    nuevoProducto = new Producto (ingNombreProducto, ingDescProducto, ingStock, ingPrecioProducto);
    console.log(nuevoProducto);
    //llamo la funciona agregarInventario para pasar este objeto completo a un array
    agregarInventario()
}
 
let baseDatos = [];
let carroCompras = [];

function agregarInventario (){
    // Crea el objeto dentro de un array
    baseDatos.push(nuevoProducto);
}
Inventario();
Inventario();
console.log(baseDatos);
validarProducto ()

// Funcion para agregar al carro
function validarProducto (){
    // Verifica que el producto que desea agregar al carro existe en el inventario
    productoSeleccionado = prompt ('Ingrese Nombre Producto a comprar:');
    console.log (productoSeleccionado);
    if (baseDatos.some((el) => el.nombreProducto == productoSeleccionado) != true) {
        console.log('Producto NO Existe en Inventario');
        alert ('El Producto NO Existe en Inventario');
     } else
         {
            console.log('Producto SI Existe en Inventario'); 
            alert ('El Producto SI Existe en Inventario');
        /* infoProducto = baseDatos.find ((el) => el.nombreProducto == productoSeleccionado)
        console.log(infoProducto);
        console.log(infoProducto.precioProducto);
        function agregarCompra (){
            carroCompras.push(infoProducto.nombreProducto);
            carroCompras.push(infoProducto.precioProducto);
            console.log(carroCompras);*/
    }
}
console.log(baseDatos);

// CODIGO PARA DESAFIO COMPLEMENTARIO:
// Crear Elemento
alert ('INICIO DE DESAFIO COMPLEMENTARIO: AGREGAR UNA ETIQUETA y EDITAR UNA ETIQUETA');

nuevoContenido = prompt ('Ingrensa el TEXTO de la Nueva Etiqueta: ');
let nuevoparrafo = document.createElement('p');
nuevoparrafo.innerText = nuevoContenido;
document.body.prepend(nuevoparrafo);
console.log(nuevoparrafo);

//Modificar Elemento
nuevoContenido2 = prompt ('Cambia el Subtitulo del Recuerdo Purpura:  ');
let encabezado = document.getElementById('encabezado');
encabezado.innerText = nuevoContenido2;
console.log(encabezado.innerText);
