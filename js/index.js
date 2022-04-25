/* 
let varInicio='';
let respdos = 0;
let cont = 0;

varInicio = prompt ('Desea iniciar la simulación? SI / NO');
console.log('Respuesta Input' + ' ' + varInicio);
if ((varInicio != 'SI' && varInicio != 'Si' && varInicio != 'si')){
    alert ('Ha desidido no iniciar, Finalizar o ha ingresado un dato invalido - favor recarge la pagina');
    console.log ('Ha desidido no iniciar, Finzalizar o ha ingresado un dato invalido - favor recarge la pagina');
    } else {    
    do {
        respdos = parseInt(prompt('Ingrese un numero del 1 al 12 \npara conocer el mes respectivo: '));
        while (respdos > 0 && respdos <=12){
            // alert ('DENTRO DEL WHILE');
            switch (respdos) {
                case 1:
                    alert ('Corresponde al mes de ENERO');
                    console.log('Corresponde al mes de ENERO');
                    cont++
                    alert ('Has realizado ' + cont + ' Simulaciones');
                    console.log ('Has realizado ' + cont + ' Simulaciones');
                    respdos=0;
                    break;
                case 2:
                    alert ('Corresponde al mes de FEBRERO');
                    console.log('Corresponde al mes de FEBRERO');
                    cont++
                    alert ('Has realizado ' + cont + ' Simulaciones');
                    console.log ('Has realizado ' + cont + ' Simulaciones');
                    respdos=0;
                    break;
                case 3:
                    alert ('Corresponde al mes de MARZO');
                    console.log('Corresponde al mes de MARZO');
                    cont++
                    alert ('Has realizado ' + cont + ' Simulaciones');
                    console.log ('Has realizado ' + cont + ' Simulaciones');
                    respdos=0;
                    break;
                case 4:
                    alert ('Corresponde al mes de ABRIL');
                    console.log('Corresponde al mes de ABRIL');
                    cont++
                    alert ('Has realizado ' + cont + ' Simulaciones');
                    console.log ('Has realizado ' + cont + ' Simulaciones');
                    respdos=0;
                    break;
                case 5:
                    alert ('Corresponde al mes de MAYO');
                    console.log('Corresponde al mes de MAYO');
                    cont++
                    alert ('Has realizado ' + cont + ' Simulaciones');
                    console.log ('Has realizado ' + cont + ' Simulaciones');
                    respdos=0;
                    break;
                case 6:
                    alert ('Corresponde al mes de JUNIO');
                    console.log('Corresponde al mes de JUNIO');
                    cont++
                    alert ('Has realizado ' + cont + ' Simulaciones');
                    console.log ('Has realizado ' + cont + ' Simulaciones');
                    respdos=0;
                    break;
                case 7:
                    alert ('Corresponde al mes de JULIO');
                    console.log('Corresponde al mes de JULIO');
                    cont++
                    alert ('Has realizado ' + cont + ' Simulaciones');
                    console.log ('Has realizado ' + cont + ' Simulaciones');
                    respdos=0;
                    break;
                case 8:
                    alert ('Corresponde al mes de AGOSTO');
                    console.log('Corresponde al mes de AGOSTO');
                    cont++
                    alert ('Has realizado ' + cont + ' Simulaciones');
                    console.log ('Has realizado ' + cont + ' Simulaciones');
                    respdos=0;
                    break;
                case 9:
                    alert ('Corresponde al mes de SEPTIEMBRE');
                    console.log('Corresponde al mes de SEPTIEMBRE');
                    cont++
                    alert ('Has realizado ' + cont + ' Simulaciones');
                    console.log ('Has realizado ' + cont + ' Simulaciones');
                    respdos=0;
                    break;
                case 10:
                    alert ('Corresponde al mes de OCTUBRE');
                    console.log('Corresponde al mes de OCTUBRE');
                    cont++
                    alert ('Has realizado ' + cont + ' Simulaciones');
                    console.log ('Has realizado ' + cont + ' Simulaciones');
                    respdos=0;
                    break;
                case 11:
                    alert ('Corresponde al mes de NOVIEMBRE');
                    console.log('Corresponde al mes de NOVIEMBRE');
                    cont++
                    alert ('Has realizado ' + cont + ' Simulaciones');
                    console.log ('Has realizado ' + cont + ' Simulaciones');
                    respdos=0;
                    break;
                case 12:
                    alert ('Corresponde al mes de DICIEMBRE');
                    console.log('Corresponde al mes de DICIEMBRE');
                    cont++
                    alert ('Has realizado ' + cont + ' Simulaciones');
                    console.log ('Has realizado ' + cont + ' Simulaciones');
                    respdos=0;
                    break;
                default:
                    break;
            }
            
        }

         varInicio = prompt ('Desea realizar otra simulación? SI / NO');
         console.log('Respuesta Input' + ' ' + varInicio);    
         if (varInicio == 'SI' || varInicio == 'Si' || varInicio == 'si'){
         } else{
                break;
            }
    } while (varInicio == 'SI' || varInicio == 'Si' || varInicio == 'si');
    
    alert ('Ha desidido no iniciar, Finalizar o ha ingresado un dato invalido - favor recarge la pagina');
    console.log ('Ha desidido no iniciar, Finzalizar o ha ingresado un dato invalido - favor recarge la pagina');
    
}
let a = 10;
function saludar (mensaje){
    console.log(mensaje);
}
saludar ('Hola');

a = 2+3;
console.log (a);


let resultado = 0;
let as = 0;
let b = 0;

as = 5; 
b = 8;

function mostrar (){
    console.log ('Resultado es = ' + resultado);
}
function sumar(){
    resultado = (a +b) ;
    mostrar();
}
sumar();
 
const sumar = () => { 
    return a+b; }
console.log(sumar());

   */


// Variables y Constantes Globales
/* let productoNombre='';
let productoDesc='';
let stockDisp=0;
let precioNeto=100000;
let respdos = 0;
let contInventario = 0;
const iva = 0.19;


// Objetos

class producto {
    constructor (productoNombre, productoDesc, stockDisp, precioNeto){
        this.productoNombre = productoNombre.toUpperCase();
        this.productoDesc = productoDesc.toUpperCase();
        this.stockDisp = parseInt(stockDisp);
        this.precioNeto = parseInt (precioNeto);
    }
}

// Funciones

const calculoCompra = (stockDisp, cantCompra) => {
    let calculoStock = stockDisp - cantCompra;
    console.log (calculoCompra)
}

const calculoStock =(stockDisp, cantCompra) => {return stockDisp - cantCompra}
console.log(calculoStock(6,2));

const calculoIva =() =>{return precioNeto * iva;}
console.log(calculoIva());

const calculoTotalCompra = () => {return precioNeto + calculoIva()}
console.log(calculoTotalCompra);


// Cuerpo Código */

/* let productoNombre='';
let productoDesc='';
let stockDisp=0;
let precioNeto=0;
let respdos = 0;
let contInventario = 0;
const iva = 0.19;

const arrayPrecioNeto = [];
const arrayNomProducto = [];

productoNombre = prompt ('Ingrese Nombre Producto:');
precioNeto = prompt ('Ingrese Precio:');
alert (productoNombre + ' ' + precioNeto);
alert  ('en array nombre producto ' + arrayNomProducto);
alert ('en array precio neto ' + arrayPrecioNeto);
arrayNomProducto.push (productoNombre);
arrayPrecioNeto.push (precioNeto);
alert  ('en array nombre producto ' + arrayNomProducto);
alert ('en array precio neto ' + arrayPrecioNeto);
productoNombre = prompt ('Ingrese Nombre Producto:');
precioNeto = prompt ('Ingrese Precio:');
alert (productoNombre + ' ' + precioNeto);
alert  ('en array nombre producto ' + arrayNomProducto);
alert ('en array precio neto ' + arrayPrecioNeto);
arrayNomProducto.push (productoNombre);
arrayPrecioNeto.push (precioNeto);
alert  ('en array nombre producto ' + arrayNomProducto);
alert ('en array precio neto ' + arrayPrecioNeto); */

/* 
const inventario = [
    {nombreProducto: 'Hola', descProducto: 'aqui', stock: 'esta ', precioProducto: 'inventario'},
]
console.log (inventario);

inventario(nombreProducto).push('juan');
console.log (inventario);

function inventario (nombreProducto, descProducto, stock, precioProducto){
    this.nombreProducto = nombreProducto;
    this.descProducto = descProducto;
    this.stock = stock;
    this.precioProducto = precioProducto;
} */


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
AgregarCarro ()

// Funcion para agregar al carro
function AgregarCarro (){
    // Verifica que el producto que desea agregar al carro existe en el inventario
    productoSeleccionado = prompt ('Ingrese Nombre Producto a comprar:');
    console.log (productoSeleccionado);
    if (baseDatos.some((el) => el.nombreProducto == productoSeleccionado) != true) {
        console.log('Producto No Existe en Inventario');
     } else
         {
        infoProducto = baseDatos.find ((el) => el.nombreProducto == productoSeleccionado)
        console.log(infoProducto);
        console.log(infoProducto.precioProducto);
        function agregarCompra (){
            carroCompras.push(infoProducto.nombreProducto);
            carroCompras.push(infoProducto.precioProducto);
            console.log(carroCompras);
            }
        }
}

console.log(baseDatos(0));