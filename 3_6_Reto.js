/*
Nuestros clientes están muy felices de poder calcular el precio final de sus 
productos después del descuento, pero la tienda tiene una nueva solicitud para 
nosotros: implementar descuentos con cupones.
*/

// Variables

// ...valor del producto
var precio = 120;

// ...lista de cupones
var diccCupon = ["rith6g875", "bdtsl658", "estoEsDescuento"];

//

// Funcion
function precioFinal(cupon){
    var porcentajeDescuento = 0;
    switch(cupon){
        case diccCupon[0]:
            porcentajeDescuento = 15;
            console.log("15");
            break;
        case diccCupon[1]:
            porcentajeDescuento = 30;
            console.log("30");
            break;
        case diccCupon[2]:
            porcentajeDescuento = 45;
            console.log("45");
            break;
        case null:
            porcentajeDescuento = 0;
            console.log("0");
            break;
    }

    // Calcular precio
    var aPagar = (precio * (100 - porcentajeDescuento) / 100);
    return aPagar;
}

//

// Para HTML

// ...al cargar la pagina
var labelprecio = document.getElementById("lPrecioOriginal");
labelprecio.innerText = precio;

// ...mostrar precio final
function mostrarPrecioFinal(){
    var inputDescuento = document.getElementById("inputDescuento");
    var value = inputDescuento.value;
    
    var preFinal = precioFinal(value);

    var lPrecioFin = document.getElementById("lPrecioFinal");
    lPrecioFin.innerText = "Monto a pagar: $" + preFinal;
}
