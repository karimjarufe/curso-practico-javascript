// Promedio

// Sacamos el promedio
function calcularPromedio(lista){
    // Opcion 1
    // var sumaLista = 0;
    // for(var i = 0; i < lista.length; i++){
    //     sumaLista += lista[i];
    // }   

    // Opcion 2
    const sumaLista = lista.reduce(function(valorAcumuladoInicial = 0, nuevoElementoLista){
        return valorAcumuladoInicial + nuevoElementoLista;
    });


    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}