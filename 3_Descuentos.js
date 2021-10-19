const precioOriginal = 100;
const descuento = 15;

function calcularPrecioConDescuento(pre, des){
    const porcentajeDelPrecioConDescuento = 100 - des;
    const precioConDescuento = (pre * porcentajeDelPrecioConDescuento) / 100;

    return precioConDescuento;
}

const porcentajeDelPrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajeDelPrecioConDescuento) / 100;

// Creamos un objeto para el log de consola
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajeDelPrecioConDescuento,
//     precioConDescuento
// });

//

// Para HTML
function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const inputDiscount = document.getElementById("inputDiscount");

    const priceValue = inputPrice.value;
    const dicountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, dicountValue)

    // Escribimos en HTML
    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "El precio final a paga es: $" + precioConDescuento;
}
