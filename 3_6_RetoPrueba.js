var precio = 120;

var cuponDescuento = [
    {key: "CuponUno", discount: 10}, 
    {key: "CuponDos", discount: 20}, 
    {key: "CuponTres", discount: 30}
];

function precioFinal(cupon){
    var aPagar = 0;
    switch(cupon){
        case cuponDescuento[0].key:
            aPagar = (precio * (100 - cuponDescuento[0].discount)) / 100;
            break;
        case cuponDescuento[1].key:
            aPagar = (precio * (100 - cuponDescuento[1].discount)) / 100;
            break;
        case cuponDescuento[2].key:
            aPagar = (precio * (100 - cuponDescuento[2].discount)) / 100;
            break;
        case null:
            aPagar = 0;
            break;
    }
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
