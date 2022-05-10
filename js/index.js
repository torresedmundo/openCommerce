let baseDatos = [];
let carroCompras = [];
let bdLocal =[];

if (localStorage.length > 0) {
    extraerLocal();
    baseDatos = bdLocal;
 }

// AGREGAR AL INVENTARIO
let btnAgregar = document.getElementById("botonAgregarInventario");
btnAgregar.addEventListener("click", (e) => {
    e.preventDefault();
    Inventario()})

function Inventario (){
    // Crea el objeto
    function Producto (nombreProducto, modeloProducto, stock, precioProducto, idProducto){
        this.nombreProducto = nombreProducto;
        this.modeloProducto = modeloProducto;
        this.stock = stock;
        this.precioProducto = precioProducto;
        this.idProducto = idProducto;
    }
    let ingNombreProducto = document.getElementById("InputNombre").value;
    let ingModeloProducto = document.getElementById("InputModelo").value;
    let ingStock = document.getElementById("InputCant").value;
    let ingPrecioProducto = document.getElementById("InputPrecio").value;
    let idProducto = Date.now();
    nuevoProducto = new Producto (ingNombreProducto, ingModeloProducto, ingStock, ingPrecioProducto, idProducto);
    baseDatos.push(nuevoProducto);
    guardarLocal();
}

function guardarLocal(){
    console.log(baseDatos);
    guardarJSON = JSON.stringify(baseDatos);
    console.log(guardarJSON);
    localStorage.setItem('bdLocal', guardarJSON)
    extraerLocal();
}

function extraerLocal(){
    bdLocal = JSON.parse(localStorage.getItem('bdLocal'));
    mostrarInventario();
}


function mostrarInventario(){
    console.log(bdLocal);
    let mostrarProductos = document.getElementById("listadoInventario");
    mostrarProductos.innerHTML = ""; 
    for (let indice of bdLocal){
        mostrarProductos.innerHTML += 
            `<div id = "${indice.idProducto}" class="container col-md-12 d-flex justify-content-center">
                <div class="d-flex col-md-3">
                    <p class="align-self-center">${indice.nombreProducto}</p>
                </div>
                <div class="d-flex col-md-2">
                    <p class="align-self-center">${indice.modeloProducto}</p>
                </div>
                <div class="d-flex col-md-2 justify-content-center">
                    <p class="align-self-center ">${indice.stock}</p>
                </div>
                <div class="d-flex col-md-2 justify-content-end">
                    <p class="align-self-center">$</p>
                    <p class="align-self-center text-end">${indice.precioProducto}</p>
                </div>
                <div class="d-flex col-md-3 justify-content-end">
                    <p class="align-self-center text-end">${indice.idProducto}</p>
                </div>
            </div>`
    }
}

// ELIMINAR DEL INVENTARIO
let btnEliminar = document.getElementById("botonEliminarInventario");
btnEliminar.addEventListener("click", (e) => {
    e.preventDefault();
    EliminarInventario()})

function EliminarInventario () {
    let ingIdProducto = document.getElementById("IdProdEliminar").value;
    let ingCantEliminar = document.getElementById("InputCantEliminar").value;
    console.log(ingIdProducto);
    console.log(ingCantEliminar);
    if (bdLocal.some((el) => el.idProducto == ingIdProducto) != true) {
        console.log('Producto NO Existe en Inventario');
     } else
        {
        let cantidad = bdLocal.find((el) => el.idProducto == ingIdProducto);
        let indice = bdLocal.findIndex((el) => el.idProducto == ingIdProducto)
        resultadoStock = cantidad.stock - ingCantEliminar;
        console.log (resultadoStock);
        console.log (indice);
        if (resultadoStock <= 0){
            console.log('No hay Stock suficiente para compra  - BORRAR DEL INVENTARIO');
            bdLocal.splice( 
                bdLocal.findIndex((el) => el.idProducto == ingIdProducto), 1);
                console.log(bdLocal);
                baseDatos = bdLocal;
                guardarLocal();
                //localStorage.removeItem('bdLocal');
                mostrarInventario();
            }  else
            {
                console.log('Stock Disponible - SEGUIR MOSTRANDO INVENTARIO');
                let actualizar = bdLocal.find((el) => el.idProducto == ingIdProducto);
                actualizar.stock = resultadoStock;
                console.log(bdLocal);
                baseDatos = bdLocal;
                guardarLocal();
                mostrarInventario();
            }        
        }
    }
    
function eliminarLocal (){

 }
    

/*
IDEAS - PARA VISTA DE CLIENTE
validarProducto ();
// Funcion para agregar al carro
function validarProducto(){
    // Verifica que el producto que desea agregar al carro existe en el inventario
    //productoSeleccionado = prompt ('Ingrese Nombre Producto a comprar:');
    console.log (productoSeleccionado);
    if (baseDatos.some((el) => el.nombreProducto == productoSeleccionado) != true) {
        console.log('Producto NO Existe en Inventario');
        alert ('El Producto NO Existe en Inventario');
     } else
         {
            console.log('Producto SI Existe en Inventario'); 
            alert ('El Producto SI Existe en Inventario');
            cantProductoSeleccionado = prompt ('Ingrese Cantidad de Productos a comprar:');
            infoProducto = baseDatos.find ((el) => el.nombreProducto == productoSeleccionado)
            console.log(infoProducto);
            resultadoStock = (infoProducto.stock) - cantProductoSeleccionado;
            if (resultadoStock < 0){
                console.log('No hay Stock suficiente para su compra');
                console.log('El Stock máximo para este producto es: ' + infoProducto.stock);

            }  else
                {
                    console.log('Stock Disponible y Ahora Agregar al Carro');
                    Carro();
                }
    }
}

function Carro (){
    function ProductosCarro (nombreProducto, cantCompra, precioProducto){
        this.nombreProducto = nombreProducto;
        this.cantCompra = cantCompra;
        this.precioProducto = precioProducto;
    }
    nuevoProductoCarro = new ProductosCarro ((infoProducto.nombreProducto), (cantProductoSeleccionado),(infoProducto.precioProducto));
    console.log(nuevoProductoCarro);
    agregarCompra();
}

function agregarCompra (){
    console.log('en funcion agregar compra');
    carroCompras.push(nuevoProductoCarro);
    console.log(carroCompras);
}
let nombre = document.getElementById("nombreProducto");
nombre.innerText = (ProductosCarro.nombreProducto);
console.log(nombreProducto[0]);

*/